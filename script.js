const intro = document.querySelector('.intro');
const introBtn = document.querySelector('.intro-btn');

if (!intro || !introBtn) {
    console.error('Intro or intro-btn element not found');
} else {
    function loadIntro() {
        intro.innerHTML = "<h2>მოგესალმებით! გთხოვთ, ინსტრუქცია წაიკითხოთ ყურადღებით.</h2>";
        const instructions = `<p>ეს არის ექსპერიმენტი განათლების ფსიქოლოგიაში.</p>
            <p>თქვენ უნდა შეავსოთ ტესტი ყურადღებით.</p> 
            <p><em><strong>წარმოიდგინეთ, რომ საპასუხისმგებლო გამოცდას წერთ.</strong></em></p>
            <p>ამისთვის თქვენ გექნებათ 10 წუთი.</p>`;
        intro.insertAdjacentHTML("beforeend", instructions);
        const consent = `
            <div class="consent-container">
                <input type="checkbox" id="consent" name="consent"/>
                <label for="consent">თანახმა ვარ, ექსპერიმენტში მივიღო მონაწილეობა</label>
            </div>`;
        intro.insertAdjacentHTML("beforeend", consent);
    }

    loadIntro();

    const checkbox = document.getElementById('consent');
    if (!checkbox) {
        console.error('Consent checkbox not found');
    } else {
        introBtn.addEventListener('click', () => {
            if (checkbox.checked) {
                introBtn.disabled = true;
                loadQuiz();
            } else {
                alert('გთხოვთ, მონიშნოთ თანხმობა ექსპერიმენტში მონაწილეობისთვის');
            }
        });
    }
}

const questions = [
    {
        text: "ყველაფერი, რაც სასიამოვნოა, სულაც არ არის სასარგებლო. ქვემოთ ჩამოთვლილთაგან რომელ დებულებას აქვს იგივე შინაარსი, რაც მოცემულს?",
        options: [
            { id: "q1a", value: "ა", text: "ა) არსებობს სასარგებლო რამ, რაც სასიამოვნო არ არის." },
            { id: "q1b", value: "ბ", text: "ბ) რაც სასარგებლო არ არის, ის არ არის სასიამოვნო." },
            { id: "q1c", value: "გ", text: "გ) ზოგიერთი რამ, რაც სასიამოვნოა, არ არის სასარგებლო." },
            { id: "q1d", value: "დ", text: "დ) რაც სასიამოვნოა, ის სასარგებლო არ არის." },
            { id: "q1e", value: "ე", text: "ე) რაც არ არის სასიამოვნო, ის სასარგებლოა." }
        ]
    },
    {
        text: "წრიულ მოედანზე შადრევნის ირგვლივ ხუთი შენობა დგას: მუზეუმი სასტუმროს გვერდით დგას, ბიბლიოთეკა ეკლესიის გვერდით დგას, ეკლესია უნივერსიტეტის გვერდით დგას. ქვემოთ ჩამოთვლილთაგან რომელი შემთხვევაა შეუძლებელი?",
        options: [
            { id: "q2a", value: "ა", text: "ა) სასტუმრო უნივერსიტეტის გვერდით დგას." },
            { id: "q2b", value: "ბ", text: "ბ) უნივერსიტეტი მუზეუმის გვერდით დგას." },
            { id: "q2c", value: "გ", text: "გ) ბიბლიოთეკა სასტუმროს გვერდით დგას." },
            { id: "q2d", value: "დ", text: "დ) ბიბლიოთეკა უნივერსიტეტის გვერდით დგას." },
            { id: "q2e", value: "ე", text: "ე) მუზეუმი ბიბლიოთეკის გვერდით დგას." }
        ]
    },
    {
        text: "ყველა მუსიკოსს უყვარს პოეზია. თინამ დაასკვნა: მაშასადამე, არსებობს ადამიანი, რომელსაც პოეზიაც უყვარს და სპორტიც. ქვემოთ ჩამოთვლილთაგან რომელი დებულება უნდა აეღო მას მეორე წანამძღვრად ამგვარი დასკვნის გამოსატანად?",
        options: [
            { id: "q3a", value: "ა", text: "ა) სპორტის ზოგიერთი მოყვარული არ არის მუსიკოსი." },
            { id: "q3b", value: "ბ", text: "ბ) ზოგიერთი მუსიკოსი არ არის სპორტის მოყვარული." },
            { id: "q3c", value: "გ", text: "გ) ზოგიერთი არამუსიკოსი არ არის სპორტის მოყვარული." },
            { id: "q3d", value: "დ", text: "დ) არც ერთი მუსიკოსი არ არის სპორტის მოყვარული." },
            { id: "q3e", value: "ე", text: "ე) ზოგიერთი მუსიკოსი სპორტის მოყვარულია." }
        ]
    },
    {
        text: "მეგობრების - ნანას, კოტეს, თაკოს, მაკას და დათოს - შესახებ ცნობილია: ნანა გოგონებს შორის ყველაზე უფროსია. კოტე ყველა გოგონაზე უმცროსია. ქვემოთ ჩამოთვლილთაგან რომელი შეიძლება ასახავდეს ასაკის მიხედვით მეგობრების დალაგებას (I - ყველაზე უმცროსი, V - ყველაზე უფროსი)?",
        options: [
            { id: "q4a", value: "ა", text: "ა) დათო კოტე მაკა ნანა თაკო" },
            { id: "q4b", value: "ბ", text: "ბ) დათო მაკა კოტე თაკო ნანა" },
            { id: "q4c", value: "გ", text: "გ) კოტე მაკა თაკო დათო ნანა" },
            { id: "q4d", value: "დ", text: "დ) კოტე თაკო ნანა მაკა დათო" },
            { id: "q4e", value: "ე", text: "ე) დათო კოტე ნანა მაკა თაკო" }
        ]
    },
    {
        text: "მსოფლიოს მოსახლეობის დიდი ნაწილი მოქმედებათა უმეტესობას მარჯვენა ხელით ასრულებს, ხოლო გარკვეული ნაწილი ცაციაა. გენეტიკური თეორიების თანახმად, რომელიმე ხელის უპირატესობა დაკავშირებულია მემკვიდრეობით ფაქტორთან. ქვემოთ ჩამოთვლილთაგან რომელი განამტკიცებს აღნიშნულ მოსაზრებას?",
        options: [
            { id: "q5a", value: "ა", text: "ა)  ადრე ბრძოლის დროს მარცხენა ხელში ეჭირათ ფარი, ხოლო მარჯვენაში - იარაღი. ეს წესი ფართოდ იყო გავრცელებული, რადგან ასე ადამიანი ფარით გულს იცავდა და გადარჩენის მეტი შანსი ჰქონდა." },
            { id: "q5b", value: "ბ", text: "ბ) კვლევების მიხედვით, ბავშვების 50% გვევლინება ცაციად, თუკი ორივე მშობელი ცაციაა, 16.7% - თუკი ერთი მშობელი მაინც ცაციაა, ხოლო 6.3% - თუკი ოჯახში არ გვხვდება ცაცია." },
            { id: "q5c", value: "გ", text: "გ) ცნობილია, რომ 4 წლის ასაკამდე ხშირია ხელის უპირატესობის ცვლა ან ორივე ხელის აქტიურად გამოყენება. მხოლოდ 4-5 წლის ასაკიდან შეიძლება განვსაზღვროთ, ბავშვი მემარჯვენეა თუ ცაცია." },
            { id: "q5d", value: "დ", text: "დ) სხვა ქვეყნებისგან განსხვავებით, აშშ-ში არასოდეს იკრძალებოდა ცაციობა. აქ, სხვა ქვეყნებთან შედარებით, ცაციების პროცენტული წილი 5 %-ით მეტია." },
            { id: "q5e", value: "ე", text: "ე)  ბოლო ათწლეულების განმავლობაში ჩატარებული კვლევების თანახმად, როგორც მარჯვენა, ასევე, მარცხენა ხელის მოძრაობის რეგულაციაში მონაწილეობას იღებს თავის ტვინის ორივე ნახევარსფერო" }
        ]
    },
    {
        text: "ყველა პლანეტა ვარსკვლავის გარშემო მოძრაობს. ზოგიერთი ციური სხეული არ მოძრაობს ვარსკვლავის გარშემო. ქვემოთ ჩამოთვლილთაგან რომელი დებულება არ შეიძლება იყოს ჭეშმარიტი, თუკი მოცემული დებულებები ჭეშმარიტია?",
        options: [
            { id: "q6a", value: "ა", text: "ა) ვარსკვლავის გარშემო მოძრავი ზოგიერთი ციური სხეული პლანეტაა." },
            { id: "q6b", value: "ბ", text: "ბ) ყველა ციური სხეული, რომელიც ვარსკვლავის გარშემო არ მოძრაობს, პლანეტაა." },
            { id: "q6c", value: "გ", text: "გ) ზოგიერთი ციური სხეული, რომელიც პლანეტა არ არის, ვარსკვლავის გარშემო მოძრაობს." },
            { id: "q6d", value: "დ", text: "დ) არც ერთი ციური სხეული, რომელიც პლანეტა არ არის, არ მოძრაობს ვარსკვლავის გარშემო." },
            { id: "q6e", value: "ე", text: "ე) არც ერთი ციური სხეული, რომელიც ვარსკვლავის გარშემო არ მოძრაობს, არ არის პლანეტა" }
        ]
    },
    {
        text: " ერთ-ერთი სოციოლოგიური კვლევის მონაცემთა საფუძველზე ერთმა სტუდენტმა დაასკვნა, რომ ასაკის მატებასთან ერთად მნიშვნელოვნად მცირდება ადამიანის პოლიტიკური აქტიურობა. ამ დასკვნის გადამოწმების შედეგად მეორე სტუდენტმა გამოთქვა ვარაუდი, რომ პოლიტიკური აქტიურობის ინტენსივობა კავშირშია არა ასაკთან, არამედ განათლების დონესთან (საფეხურთან). ქვემოთ ჩამოთვლილთაგან რომელი განამტკიცებს მეორე სტუდენტის ვარაუდს?",
        options: [
            { id: "q7a", value: "ა", text: "ა) კვლევაში ჩართული ასაკოვანი და ახალგაზრდა ასაკის რესპონდენტები, ძირითადად, პოლიტიკურად და სოციალურად აქტიური ადამიანები იყვნენ." },
            { id: "q7b", value: "ბ", text: "ბ) კვლევის მონაწილენი, ძირითადად, მცირე და დიდი ქალაქების მაცხოვრებლები იყვნენ, თუმცა რესპონდენტთა შორის სოფლად მცხოვრებნიც იყვნენ." },
            { id: "q7c", value: "გ", text: "გ) ახალგაზრდა რესპონდენტებს შორის თანაბარი რაოდენობით იყვნენ როგორც უმაღლესი, ასევე, საშუალო და პროფესიული განათლების მქონე ადამიანები, ხოლო უფროსი ასაკის რესპონდენტებში ჭარბობდნენ საშუალო და პროფესიული განათლების მქონენი." },
            { id: "q7d", value: "დ", text: "დ) ახალგაზრდებისგან განსხვავებით, უფროსი ასაკის რესპონდენტთა დიდი ნაწილი მიუთითებდა, რომ ისინი მხარს არ უჭერენ არც ერთ პოლიტიკურ მოძრაობას." },
            { id: "q7e", value: "ე", text: "ე) რესპონდენტთა დემოგრაფიული მონაცემების ანალიზისას აღმოჩნდა, რომ კვლევის მონაწილეთა უმრავლესობას უმაღლესი განათლება ქვეყნის წამყვან უნივერსიტეტებში ჰქონდა მიღებული" }
        ]
    },
    {
        text: "ზოგიერთი წიგნი ძალიან სასაცილოა. ყველა წიგნი, რომელიც ძალიან სასაცილოა, სწრაფად იკითხება. ანას მხოლოდ ის წიგნები მოსწონს, რომლებიც ძალიან სასაცილოა. ქვემოთ ჩამოთვლილთაგან რომელი გამომდინარეობს მოცემული დებულებებიდან?",
        options: [
            { id: "q8a", value: "ა", text: "ა) თუ წიგნი სასაცილოც არის და სწრაფადაც იკითხება, ის ანას მოეწონება." },
            { id: "q8b", value: "ბ", text: "ბ) თუ წიგნი სწრაფად იკითხება, ის ძალიან სასაცილო უნდა იყოს." },
            { id: "q8c", value: "გ", text: "გ) თუ წიგნი სწრაფად იკითხება, ანას ის აუცილებლად მოეწონება." },
            { id: "q8d", value: "დ", text: "დ) თუ წიგნი ძალიან სასაცილოა, ანას ის აუცილებლად მოეწონება." },
            { id: "q8e", value: "ე", text: "ე) თუ ანას წიგნი მოეწონა, ის სწრაფად იკითხება." }
        ]
    },
    {
        text: "ყველა რეპტილია ცივსისხლიანია. არც ერთი რეპტილია არ ბინადრობს მაღალ ხეებზე. მაღალ ხეებზე მხოლოდ ფრინველები ბინადრობენ. არც ერთი ფრინველი არ არის ცივსისხლიანი. ქვემოთ ჩამოთვლილთაგან რომელი აღწერს სწორად ამ დებულებებს შორის მიმართებას?",
        options: [
            { id: "q9a", value: "ა", text: "ა) I გამომდინარეობს დანარჩენი სამიდან." },
            { id: "q9b", value: "ბ", text: "ბ) II გამომდინარეობს დანარჩენი სამიდან." },
            { id: "q9c", value: "გ", text: "გ) III გამომდინარეობს დანარჩენი სამიდან." },
            { id: "q9d", value: "დ", text: "დ) IV გამომდინარეობს დანარჩენი სამიდან." },
            { id: "q9e", value: "ე", text: "ე) არც ერთი მათგანი არ გამომდინარეობს დანარჩენი სამიდან" }
        ]
    }
];

let currentQuestionIndex = 0;
const answers = [];
const confidences = [];

function loadQuiz() {
    document.body.innerHTML = `
        <h2>ტესტი დაიწყო!</h2>
        <p>თქვენ გაქვთ 10 წუთი ტესტის შესასრულებლად.</p>
        <div id="timer">დარჩენილი დრო: <span id="time">10:00</span></div>
        <div id="question-container"></div>
    `;
    startTimer(10 * 60);
    renderQuestion();
}

function renderQuestion() {
    const questionContainer = document.getElementById('question-container');
    const question = questions[currentQuestionIndex];
    const isLastQuestion = currentQuestionIndex === questions.length - 1;
    questionContainer.innerHTML = `
        <form id="quiz-form">
            <div class="question">
                <p><strong>${currentQuestionIndex + 1}.</strong> ${question.text}</p>
                ${question.options.map(option => `
                    <input type="radio" name="answer" value="${option.value}" id="${option.id}">
                    <label for="${option.id}">${option.text}</label><br>
                `).join('')}
                <div class="confidence">
                    <p>რამდენად თავდაჯერებული ხართ საკუთარ პასუხში?</p>
                    <select id="confidence" name="confidence">
                        <option value="">აირჩიეთ (1-10)</option>
                        ${Array.from({length: 10}, (_, i) => `
                            <option value="${i + 1}">${i + 1}</option>
                        `).join('')}
                    </select>
                </div>
            </div>
            <button type="button" id="next-btn" disabled>${isLastQuestion ? 'ტესტის გაგზავნა' : 'შემდეგი'}</button>
        </form>
    `;

    const form = document.getElementById('quiz-form');
    const nextBtn = document.getElementById('next-btn');
    const answerInputs = document.getElementsByName('answer');
    const confidenceSelect = document.getElementById('confidence');

    function checkInputs() {
        const answerSelected = Array.from(answerInputs).some(input => input.checked);
        const confidenceSelected = confidenceSelect.value !== '';
        nextBtn.disabled = !(answerSelected && confidenceSelected);
    }

    answerInputs.forEach(input => input.addEventListener('change', checkInputs));
    confidenceSelect.addEventListener('change', checkInputs);

    nextBtn.addEventListener('click', () => {
        const selectedAnswer = document.querySelector('input[name="answer"]:checked').value;
        const selectedConfidence = confidenceSelect.value;
        answers[currentQuestionIndex] = selectedAnswer;
        confidences[currentQuestionIndex] = selectedConfidence;

        if (isLastQuestion) {
            alert('ტესტი გაგზავნილია!');
            console.log('Answers:', answers);
            console.log('Confidences:', confidences);
        } else {
            currentQuestionIndex++;
            renderQuestion();
        }
    });
}

function startTimer(duration) {
    let timeLeft = duration;
    const timerDisplay = document.getElementById('time');
    
    if (!timerDisplay) {
        console.error('Timer display element not found');
        return;
    }

    const timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            timerDisplay.textContent = '00:00';
            timerDisplay.classList.add('red');
            return;
        }

        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        timeLeft--;
    }, 1000);
}