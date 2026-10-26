const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

/* ---------- Quizzes ---------- */
(function () {
  const WA = 'https://wa.me/918885599388?text=';
  const panel = document.getElementById('quiz-panel');
  if (!panel) return;

  const trackQuiz = {
    title: 'Find your track',
    intro: 'Answer six quick questions about how you like to work. We will suggest a starting track.',
    questions: [
      { q: 'Which sounds most exciting to you?', o: [['Writing code that solves problems', 'python'], ['Building smart assistants that use AI', 'ai'], ['Setting up servers and automating deployments', 'devops']] },
      { q: 'In a group project, you would rather…', o: [['Write the core logic', 'python'], ['Design the AI features and prompts', 'ai'], ['Set up Git, testing and deployment', 'devops']] },
      { q: 'Which would you open first?', o: [['A code editor', 'python'], ['An AI chat tool or API', 'ai'], ['A terminal window', 'devops']] },
      { q: 'Something stops working. You…', o: [['Debug the code line by line', 'python'], ['Change the input and check how the AI responds', 'ai'], ['Check logs and server settings', 'devops']] },
      { q: 'Which project would you most like to build?', o: [['An automation script or small web app', 'python'], ['A chatbot that answers from documents', 'ai'], ['A pipeline that deploys an app automatically', 'devops']] },
      { q: 'Which sounds most like you?', o: [['I like logic puzzles', 'python'], ['I am curious how AI thinks', 'ai'], ['I like knowing how things run behind the scenes', 'devops']] }
    ],
    results: {
      python: { name: 'Python', text: 'You like logic and building things step by step. Python is a great place to start, and it is also the foundation for AI and automation.', next: 'Start with Python fundamentals, then Git and problem solving.' },
      ai: { name: 'Agentic AI', text: 'You are curious about intelligent tools and how to build with them. Python is the base, and then you can work with AI APIs and agent workflows.', next: 'Start with Python, then move to AI APIs, RAG basics and agents.' },
      devops: { name: 'DevOps', text: 'You enjoy understanding how systems run and how software reaches users. Linux, Git, cloud and automation will suit you well.', next: 'Start with Linux and Git, then cloud, Docker and CI/CD.' }
    }
  };

  const techQuiz = {
    title: 'Quick tech check',
    intro: 'Ten questions on Linux, Python, Git, cloud and AI basics. You see the answer after each question.',
    questions: [
      { q: 'Which Linux command lists the files in a folder?', o: ['cd', 'ls', 'rm', 'cat'], a: 1, e: '`ls` lists files. `cd` changes directory, `rm` removes files and `cat` shows a file.' },
      { q: 'What does `chmod 755 script.sh` do?', o: ['Deletes the file', 'Renames the file', 'Changes the file permissions', 'Runs the file'], a: 2, e: '`chmod` changes permissions. 755 lets the owner read, write and run it, and others read and run it.' },
      { q: 'In Python, what is the type of [1, 2, 3]?', o: ['tuple', 'dict', 'list', 'set'], a: 2, e: 'Square brackets make a list. A tuple uses round brackets and a dict uses curly brackets with keys.' },
      { q: 'What does len("sky") return in Python?', o: ['2', '3', '4', 'An error'], a: 1, e: 'The string has three characters: s, k and y.' },
      { q: 'Which Git command saves your staged changes in the local history?', o: ['git push', 'git clone', 'git commit', 'git status'], a: 2, e: '`git commit` records a snapshot locally. `git push` sends commits to a remote such as GitHub.' },
      { q: 'Which Git command fetches remote changes and merges them into your branch?', o: ['git pull', 'git init', 'git add', 'git log'], a: 0, e: '`git pull` fetches and merges. `git add` stages changes and `git log` shows history.' },
      { q: 'What kind of service is Amazon S3?', o: ['A database engine', 'Object storage', 'A virtual server', 'A DNS service'], a: 1, e: 'S3 stores files as objects in buckets. EC2 provides virtual servers and Route 53 provides DNS.' },
      { q: 'What is a Docker container?', o: ['A packaged, isolated environment that runs an app', 'A type of database', 'A text editor', 'A cloud region'], a: 0, e: 'A container bundles an app with what it needs, so it runs the same way on different machines.' },
      { q: 'What does CI/CD help teams do?', o: ['Design logos', 'Automatically build, test and deploy code', 'Write documents', 'Manage payroll'], a: 1, e: 'Continuous integration and delivery automate building, testing and releasing software.' },
      { q: 'What does RAG (Retrieval-Augmented Generation) let an AI model do?', o: ['Train faster', 'Use your own documents to ground its answers', 'Run without internet', 'Replace databases'], a: 1, e: 'RAG retrieves relevant text from your documents and gives it to the model, so answers are based on that content.' }
    ],
    levels: [
      { min: 0, label: 'Getting started', text: 'Everything starts somewhere. A structured path from Linux and Python basics would help you build confidence.' },
      { min: 5, label: 'Building momentum', text: 'You know a good part of the basics. Guided practice and projects would help you connect the pieces.' },
      { min: 8, label: 'Ready to build', text: 'Strong basics. Projects, cloud and DevOps workflows, and AI would be good next steps.' }
    ]
  };

  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const code = (s) => esc(s).replace(/`([^`]+)`/g, '<code>$1</code>');
  let current = 'track';
  let state = null;

  function reset(which) {
    current = which;
    state = { i: 0, answers: [], score: { python: 0, ai: 0, devops: 0 }, correct: 0, answered: false };
    document.querySelectorAll('.quiz-tab').forEach((b) => {
      const on = b.dataset.quiz === which;
      b.classList.toggle('active', on);
      b.setAttribute('aria-selected', String(on));
    });
    renderIntro();
  }

  function renderIntro() {
    const quiz = current === 'track' ? trackQuiz : techQuiz;
    panel.innerHTML = '<h3>' + esc(quiz.title) + '</h3><p class="quiz-intro">' + esc(quiz.intro) + '</p>' +
      '<button type="button" class="btn btn-primary" id="quiz-start">Start</button>';
    panel.querySelector('#quiz-start').addEventListener('click', renderQuestion);
  }

  function progress(n, total) {
    return '<div class="quiz-progress"><span>Question ' + (n + 1) + ' of ' + total + '</span><div class="quiz-bar" aria-hidden="true"><i style="width:' + ((n) / total * 100) + '%"></i></div></div>';
  }

  function renderQuestion() {
    const quiz = current === 'track' ? trackQuiz : techQuiz;
    const total = quiz.questions.length;
    if (state.i >= total) return renderResult();
    const item = quiz.questions[state.i];
    state.answered = false;
    let opts = '';
    item.o.forEach((opt, idx) => {
      const label = current === 'track' ? opt[0] : opt;
      opts += '<button type="button" class="quiz-option" data-idx="' + idx + '">' + code(label) + '</button>';
    });
    panel.innerHTML = progress(state.i, total) + '<h3 class="quiz-q">' + code(item.q) + '</h3><div class="quiz-options">' + opts + '</div><div class="quiz-feedback" id="quiz-feedback" aria-live="polite"></div>';
    panel.querySelectorAll('.quiz-option').forEach((b) => b.addEventListener('click', () => choose(Number(b.dataset.idx))));
    const h = panel.querySelector('.quiz-q'); if (h) { h.setAttribute('tabindex', '-1'); }
  }

  function choose(idx) {
    if (state.answered) return;
    state.answered = true;
    const quiz = current === 'track' ? trackQuiz : techQuiz;
    const item = quiz.questions[state.i];
    const buttons = panel.querySelectorAll('.quiz-option');
    if (current === 'track') {
      state.score[item.o[idx][1]] += 1;
      buttons.forEach((b, i) => { b.disabled = true; if (i === idx) b.classList.add('picked'); });
      setTimeout(() => { state.i += 1; renderQuestion(); }, 250);
      return;
    }
    const right = idx === item.a;
    if (right) state.correct += 1;
    buttons.forEach((b, i) => {
      b.disabled = true;
      if (i === item.a) b.classList.add('right');
      else if (i === idx) b.classList.add('wrong');
    });
    const last = state.i === quiz.questions.length - 1;
    document.getElementById('quiz-feedback').innerHTML = '<p><strong>' + (right ? 'Correct.' : 'Not quite.') + '</strong> ' + code(item.e) + '</p><button type="button" class="btn btn-primary" id="quiz-next">' + (last ? 'See my result' : 'Next question') + '</button>';
    const next = document.getElementById('quiz-next');
    next.addEventListener('click', () => { state.i += 1; renderQuestion(); });
    next.focus();
  }

  function renderResult() {
    if (current === 'track') {
      const order = ['python', 'ai', 'devops'];
      let best = 'python';
      order.forEach((k) => { if (state.score[k] > state.score[best]) best = k; });
      const r = trackQuiz.results[best];
      const msg = 'Hi Sky Forge Solutions, I took the track quiz on your website and my suggested track is ' + r.name + '. I would like to know more about the training.';
      panel.innerHTML = '<p class="quiz-kicker">Your suggested starting track</p><h3 class="quiz-result">' + esc(r.name) + '</h3><p>' + esc(r.text) + '</p><p><strong>Suggested path:</strong> ' + esc(r.next) + '</p>' +
        '<div class="quiz-actions"><a class="btn btn-primary" target="_blank" rel="noopener" href="' + WA + encodeURIComponent(msg) + '">Chat on WhatsApp</a><button type="button" class="btn btn-secondary" id="quiz-again">Try again</button><button type="button" class="btn btn-secondary" id="quiz-switch">Take the tech check</button></div>';
      document.getElementById('quiz-switch').addEventListener('click', () => reset('tech'));
    } else {
      const total = techQuiz.questions.length;
      let level = techQuiz.levels[0];
      techQuiz.levels.forEach((l) => { if (state.correct >= l.min) level = l; });
      const msg = 'Hi Sky Forge Solutions, I took the tech check on your website and scored ' + state.correct + '/' + total + ' (' + level.label + '). I would like to know more about the training.';
      panel.innerHTML = '<p class="quiz-kicker">Your score</p><h3 class="quiz-result">' + state.correct + ' / ' + total + ' &middot; ' + esc(level.label) + '</h3><p>' + esc(level.text) + '</p>' +
        '<div class="quiz-actions"><a class="btn btn-primary" target="_blank" rel="noopener" href="' + WA + encodeURIComponent(msg) + '">Chat on WhatsApp</a><button type="button" class="btn btn-secondary" id="quiz-again">Try again</button><button type="button" class="btn btn-secondary" id="quiz-switch">Find your track</button></div>';
      document.getElementById('quiz-switch').addEventListener('click', () => reset('track'));
    }
    document.getElementById('quiz-again').addEventListener('click', () => reset(current));
  }

  document.querySelectorAll('.quiz-tab').forEach((b) => b.addEventListener('click', () => reset(b.dataset.quiz)));
  reset('track');
})();

/* ---------- College enquiry form ---------- */
(function () {
  const form = document.getElementById('enquiry-form');
  if (!form) return;
  const err = document.getElementById('enquiry-error');
  let via = 'whatsapp';
  form.querySelectorAll('button[type=submit]').forEach((b) => b.addEventListener('click', () => { via = b.dataset.via; }));
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const v = (n) => (form.elements[n].value || '').trim();
    const phone = v('phone').replace(/[^0-9+]/g, '');
    if (!v('college') || !v('person') || phone.replace(/\D/g, '').length < 10) {
      err.textContent = 'Please enter the college name, your name and a valid phone number.';
      err.hidden = false;
      return;
    }
    const email = v('email');
    if (email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      err.textContent = 'Please check the email address.';
      err.hidden = false;
      return;
    }
    err.hidden = true;
    const lines = ['Hello Sky Forge Solutions, we would like to discuss a training program for our college.', '',
      'College: ' + v('college'), 'Contact person: ' + v('person'), 'Phone: ' + phone];
    if (email) lines.push('Email: ' + email);
    if (v('students')) lines.push('Approximate students: ' + v('students'));
    if (v('message')) lines.push('', v('message'));
    const body = lines.join('\n');
    if (via === 'email') {
      window.location.href = 'mailto:mainamdevops4@gmail.com?subject=' + encodeURIComponent('College enquiry - ' + v('college')) + '&body=' + encodeURIComponent(body);
    } else {
      window.open('https://wa.me/918885599388?text=' + encodeURIComponent(body), '_blank', 'noopener');
    }
  });
})();
