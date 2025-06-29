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

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-tRFw2Xy0oSCSfczM_s545B2eeK2_cw4",
  authDomain: "survey-app-43e37.firebaseapp.com",
  projectId: "survey-app-43e37",
  storageBucket: "survey-app-43e37.firebasestorage.app",
  messagingSenderId: "246041382866",
  appId: "1:246041382866:web:1271b4e0e4aa598b93820b",
  measurementId: "G-7GJDJWRHYF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

const participantID = generateUUID();
const intro = document.querySelector('.intro');
const participantInfo = document.querySelector('.participant-info');
const introBtn = document.createElement('button');
introBtn.type = 'button';
introBtn.className = 'intro-btn';
introBtn.id = 'start-info';
introBtn.setAttribute('aria-label', 'გაგრძელება');
introBtn.textContent = 'გაგრძელება';

if (!intro || !participantInfo) {
    console.error('Intro or participant-info element not found');
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
        intro.appendChild(introBtn);
    }

    loadIntro();

    const checkbox = document.getElementById('consent');
    if (!checkbox) {
        console.error('Consent checkbox not found');
    } else {
        introBtn.addEventListener('click', () => {
            if (checkbox.checked) {
                intro.style.display = 'none';
                participantInfo.style.display = 'block';
                loadParticipantInfo();
            } else {
                alert('გთხოვთ, მონიშნოთ თანხმობა ექსპერიმენტში მონაწილეობისთვის');
            }
        });
    }
}

function loadParticipantInfo() {
    participantInfo.innerHTML = `
        <h2>მონაწილის ინფორმაცია</h2>
        <form id="participant-form">
            <div class="form-group">
                <p><strong>სქესი</strong></p>
                <input type="radio" name="sex" value="1" id="sex-female">
                <label for="sex-female">მდედრობითი</label><br>
                <input type="radio" name="sex" value="2" id="sex-male">
                <label for="sex-male">მამრობითი</label>
            </div>
            <div class="form-group">
                <p><strong>ასაკი</strong></p>
                <input type="number" id="age" name="age" min="1" max="120" step="1" placeholder="შეიყვანეთ ასაკი">
            </div>
            <div class="form-group">
                <p><strong>განათლება</strong></p>
                <select id="education" name="education">
                    <option value="">აირჩიეთ განათლება</option>
                    <option value="საშუალო">საშუალო</option>
                    <option value="პროფესიული">პროფესიული</option>
                    <option value="სტუდენტი">სტუდენტი</option>
                    <option value="უმაღლესი">უმაღლესი</option>
                </select>
            </div>
            <button type="button" id="start-quiz" class="intro-btn" disabled>ტესტის დაწყება</button>
        </form>
    `;

    const startQuizBtn = document.getElementById('start-quiz');
    const sexInputs = document.getElementsByName('sex');
    const ageInput = document.getElementById('age');
    const educationSelect = document.getElementById('education');

    function checkParticipantInputs() {
        const sexSelected = Array.from(sexInputs).some(input => input.checked);
        const ageValid = ageInput.value && Number.isInteger(Number(ageInput.value)) && ageInput.value >= 1 && ageInput.value <= 120;
        const educationSelected = educationSelect.value !== '';
        startQuizBtn.disabled = !(sexSelected && ageValid && educationSelected);
    }

    sexInputs.forEach(input => input.addEventListener('change', checkParticipantInputs));
    ageInput.addEventListener('input', checkParticipantInputs);
    educationSelect.addEventListener('change', checkParticipantInputs);

    startQuizBtn.addEventListener('click', () => {
        const sex = Number(document.querySelector('input[name="sex"]:checked').value);
        const age = Number(ageInput.value);
        const education = educationSelect.value;
        const studentStatus = education === 'სტუდენტი' ? 1 : 2;
        participantData = { participantID, sex, age, studentStatus };
        participantInfo.style.display = 'none';
        loadQuiz();
    });
}

let participantData = {};
let currentQuestionIndex = 0;
const answers = [];
const confidences = [];
const answerChanges = Array(questions.length).fill(0);
const selectedAnswers = Array(questions.length).fill().map(() => new Set());
let currentSurveyIndex = 0;
const surveyResponses = [];

const surveyQuestions = [
    {
        text: "იმდენ ნივთს/სხვადასხვა რამეს ვინახავ, რომ ისინი ხელს მიშლის.",
        options: [
            { id: "s1a", value: 0, text: "საერთოდ არ მახასიათებს" },
            { id: "s1b", value: 1, text: "ცოტათი მახასიათებს" },
            { id: "s1c", value: 2, text: "საშუალოდ მახასიათებს" },
            { id: "s1d", value: 3, text: "ძალიან მახასიათებს" },
            { id: "s1e", value: 4, text: "უკიდურესად მახასიათებს" }
        ]
    },
    {
        text: "იმაზე ხშირად ვამოწმებ რაღაცებს, ვიდრე საჭიროა.",
        options: [
            { id: "s2a", value: 0, text: "საერთოდ არ მახასიათებს" },
            { id: "s2b", value: 1, text: "ცოტათი მახასიათებს" },
            { id: "s2c", value: 2, text: "საშუალოდ მახასიათებს" },
            { id: "s2d", value: 3, text: "ძალიან მახასიათებს" },
            { id: "s2e", value: 4, text: "უკიდურესად მახასიათებს" }
        ]
    },
    {
        text: "ვღიზიანდები, როცა საგნები სწორად არ არის დალაგებული.",
        options: [
            { id: "s3a", value: 0, text: "საერთოდ არ მახასიათებს" },
            { id: "s3b", value: 1, text: "ცოტათი მახასიათებს" },
            { id: "s3c", value: 2, text: "საშუალოდ მახასიათებს" },
            { id: "s3d", value: 3, text: "ძალიან მახასიათებს" },
            { id: "s3e", value: 4, text: "უკიდურესად მახასიათებს" }
        ]
    },
    {
        text: "ვგრძნობ საჭიროებას, რომ თვლა უნდა დავიწყო, როცა რაღაცას ვაკეთებ.",
        options: [
            { id: "s4a", value: 0, text: "საერთოდ არ მახასიათებს" },
            { id: "s4b", value: 1, text: "ცოტათი მახასიათებს" },
            { id: "s4c", value: 2, text: "საშუალოდ მახასიათებს" },
            { id: "s4d", value: 3, text: "ძალიან მახასიათებს" },
            { id: "s4e", value: 4, text: "უკიდურესად მახასიათებს" }
        ]
    },
    {
        text: "მიჭირს რაიმე საგნის შეხება, როცა ვიცი, რომ მას შეხებიან უცნობები ან კონკრეტული ადამიანები.",
        options: [
            { id: "s5a", value: 0, text: "საერთოდ არ მახასიათებს" },
            { id: "s5b", value: 1, text: "ცოტათი მახასიათებს" },
            { id: "s5c", value: 2, text: "საშუალოდ მახასიათებს" },
            { id: "s5d", value: 3, text: "ძალიან მახასიათებს" },
            { id: "s5e", value: 4, text: "უკიდურესად მახასიათებს" }
        ]
    },
    {
        text: "მიჭირს საკუთარი ფიქრების კონტროლი.",
        options: [
            { id: "s6a", value: 0, text: "საერთოდ არ მახასიათებს" },
            { id: "s6b", value: 1, text: "ცოტათი მახასიათებს" },
            { id: "s6c", value: 2, text: "საშუალოდ მახასიათებს" },
            { id: "s6d", value: 3, text: "ძალიან მახასიათებს" },
            { id: "s6e", value: 4, text: "უკიდურესად მახასიათებს" }
        ]
    },
    {
        text: "ვაგროვებ ისეთ ნივთებს, რომლებიც არ მჭირდება.",
        options: [
            { id: "s7a", value: 0, text: "საერთოდ არ მახასიათებს" },
            { id: "s7b", value: 1, text: "ცოტათი მახასიათებს" },
            { id: "s7c", value: 2, text: "საშუალოდ მახასიათებს" },
            { id: "s7d", value: 3, text: "ძალიან მახასიათებს" },
            { id: "s7e", value: 4, text: "უკიდურესად მახასიათებს" }
        ]
    },
    {
        text: "განმეორებით ვამოწმებ კარებს, ფანჯრებს, უჯრებს და ა.შ.",
        options: [
            { id: "s8a", value: 0, text: "საერთოდ არ მახასიათებს" },
            { id: "s8b", value: 1, text: "ცოტათი მახასიათებს" },
            { id: "s8c", value: 2, text: "საშუალოდ მახასიათებს" },
            { id: "s8d", value: 3, text: "ძალიან მახასიათებს" },
            { id: "s8e", value: 4, text: "უკიდურესად მახასიათებს" }
        ]
    },
    {
        text: "ვღიზიანდები, როცა სხვები საგნებს უცვლიან იმ თანმიმდევრობას, როგორშიც მაქვს დალაგებული.",
        options: [
            { id: "s9a", value: 0, text: "საერთოდ არ მახასიათებს" },
            { id: "s9b", value: 1, text: "ცოტათი მახასიათებს" },
            { id: "s9c", value: 2, text: "საშუალოდ მახასიათებს" },
            { id: "s9d", value: 3, text: "ძალიან მახასიათებს" },
            { id: "s9e", value: 4, text: "უკიდურესად მახასიათებს" }
        ]
    },
    {
        text: "საჭიროებას ვგრძნობ, რომ უნდა გავიმეორო გარკვეული რიცხვები.",
        options: [
            { id: "s10a", value: 0, text: "საერთოდ არ მახასიათებს" },
            { id: "s10b", value: 1, text: "ცოტათი მახასიათებს" },
            { id: "s10c", value: 2, text: "საშუალოდ მახასიათებს" },
            { id: "s10d", value: 3, text: "ძალიან მახასიათებს" },
            { id: "s10e", value: 4, text: "უკიდურესად მახასიათებს" }
        ]
    },
    {
        text: "ზოგჯერ უეცრად მიწევს საკუთარი თავის დაბანა ან გაწმენდა მხოლოდ იმიტომ, რომ თავს დაბინძურებულად ვგრძნობ.",
        options: [
            { id: "s11a", value: 0, text: "საერთოდ არ მახასიათებს" },
            { id: "s11b", value: 1, text: "ცოტათი მახასიათებს" },
            { id: "s11c", value: 2, text: "საშუალოდ მახასიათებს" },
            { id: "s11d", value: 3, text: "ძალიან მახასიათებს" },
            { id: "s11e", value: 4, text: "უკიდურესად მახასიათებს" }
        ]
    },
    {
        text: "ვღელავ არასასურველი ფიქრების გამო, რომლებიც ჩემს თავში უეცრად ჩნდება.",
        options: [
            { id: "s12a", value: 0, text: "საერთოდ არ მახასიათებს" },
            { id: "s12b", value: 1, text: "ცოტათი მახასიათებს" },
            { id: "s12c", value: 2, text: "საშუალოდ მახასიათებს" },
            { id: "s12d", value: 3, text: "ძალიან მახასიათებს" },
            { id: "s12e", value: 4, text: "უკიდურესად მახასიათებს" }
        ]
    },
    {
        text: "ვერიდები ნივთების გადაყრას, რადგან მეშინია, რომ მომავალში დამჭირდება.",
        options: [
            { id: "s13a", value: 0, text: "საერთოდ არ მახასიათებს" },
            { id: "s13b", value: 1, text: "ცოტათი მახასიათებს" },
            { id: "s13c", value: 2, text: "საშუალოდ მახასიათებს" },
            { id: "s13d", value: 3, text: "ძალიან მახასიათებს" },
            { id: "s13e", value: 4, text: "უკიდურესად მახასიათებს" }
        ]
    },
    {
        text: "განმეორებით ვამოწმებ გაზის, წყლის ონკანებსა და შუქის ჩამრთველებს მათი გამორთვის შემდეგაც კი.",
        options: [
            { id: "s14a", value: 0, text: "საერთოდ არ მახასიათებს" },
            { id: "s14b", value: 1, text: "ცოტათი მახასიათებს" },
            { id: "s14c", value: 2, text: "საშუალოდ მახასიათებს" },
            { id: "s14d", value: 3, text: "ძალიან მახასიათებს" },
            { id: "s14e", value: 4, text: "უკიდურესად მახასიათებს" }
        ]
    },
    {
        text: "ვგრძნობ საჭიროებას, რომ საგნები კონკრეტული თანმიმდევრობით იყოს დალაგებული.",
        options: [
            { id: "s15a", value: 0, text: "საერთოდ არ მახასიათებს" },
            { id: "s15b", value: 1, text: "ცოტათი მახასიათებს" },
            { id: "s15c", value: 2, text: "საშუალოდ მახასიათებს" },
            { id: "s15d", value: 3, text: "ძალიან მახასიათებს" },
            { id: "s15e", value: 4, text: "უკიდურესად მახასიათებს" }
        ]
    },
    {
        text: "მგონია, რომ არსებობს „კარგი“ და „ცუდი“ რიცხვები.",
        options: [
            { id: "s16a", value: 0, text: "საერთოდ არ მახასიათებს" },
            { id: "s16b", value: 1, text: "ცოტათი მახასიათებს" },
            { id: "s16c", value: 2, text: "საშუალოდ მახასიათებს" },
            { id: "s16d", value: 3, text: "ძალიან მახასიათებს" },
            { id: "s16e", value: 4, text: "უკიდურესად მახასიათებს" }
        ]
    },
    {
        text: "ხელებს უფრო ხშირად და მეტხანს ვიბან, ვიდრე საჭიროა.",
        options: [
            { id: "s17a", value: 0, text: "საერთოდ არ მახასიათებს" },
            { id: "s17b", value: 1, text: "ცოტათი მახასიათებს" },
            { id: "s17c", value: 2, text: "საშუალოდ მახასიათებს" },
            { id: "s17d", value: 3, text: "ძალიან მახასიათებს" },
            { id: "s17e", value: 4, text: "უკიდურესად მახასიათებს" }
        ]
    },
    {
        text: "ხშირად მაწუხებს არასასიამოვნო შინაარსის ფიქრები და მიჭირს მათგან გათავისუფლება.",
        options: [
            { id: "s18a", value: 0, text: "საერთოდ არ მახასიათებს" },
            { id: "s18b", value: 1, text: "ცოტათი მახასიათებს" },
            { id: "s18c", value: 2, text: "საშუალოდ მახასიათებს" },
            { id: "s18d", value: 3, text: "ძალიან მახასიათებს" },
            { id: "s18e", value: 4, text: "უკიდურესად მახასიათებს" }
        ]
    }
];

function loadQuiz() {
    document.body.innerHTML = `
        <h2>ტესტი დაიწყო!</h2>
        <p>თქვენ გაქვთ 10 წუთი ტესტისა და გამოკითხვის შესასრულებლად.</p>
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
            <button type="button" id="next-btn" disabled>${isLastQuestion ? 'გამოკითხვის დაწყება' : 'შემდეგი'}</button>
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

    answerInputs.forEach(input => {
        input.addEventListener('change', () => {
            selectedAnswers[currentQuestionIndex].add(input.value);
            answerChanges[currentQuestionIndex] = selectedAnswers[currentQuestionIndex].size;
            checkInputs();
        });
    });
    confidenceSelect.addEventListener('change', checkInputs);

    nextBtn.addEventListener('click', () => {
        const selectedAnswer = document.querySelector('input[name="answer"]:checked').value;
        const selectedConfidence = Number(confidenceSelect.value);
        answers[currentQuestionIndex] = selectedAnswer;
        confidences[currentQuestionIndex] = selectedConfidence;

        if (isLastQuestion) {
            loadSurvey();
        } else {
            currentQuestionIndex++;
            renderQuestion();
        }
    });
}

function loadSurvey() {
    currentSurveyIndex = 0;
    document.body.innerHTML = `
        <h2>გამოკითხვა</h2>
        <p>მონიშნეთ ის ვარიანტი, რომელიც ფიქრობთ, რომ ყველაზე მეტად გახასიათებთ.</p>
        <div id="timer">დარჩენილი დრო: <span id="time"></span></div>
        <div id="survey-container"></div>
    `;
    renderSurveyQuestion();
}

function renderSurveyQuestion() {
    const surveyContainer = document.getElementById('survey-container');
    const surveyQuestion = surveyQuestions[currentSurveyIndex];
    const isLastSurveyQuestion = currentSurveyIndex === surveyQuestions.length - 1;
    surveyContainer.innerHTML = `
        <form id="survey-form">
            <div class="survey">
                <p><strong>${currentSurveyIndex + 1}.</strong> ${surveyQuestion.text}</p>
                ${surveyQuestion.options.map(option => `
                    <input type="radio" name="survey-answer" value="${option.value}" id="${option.id}">
                    <label for="${option.id}">${option.text}</label><br>
                `).join('')}
            </div>
            <button type="button" id="survey-next-btn" disabled>${isLastSurveyQuestion ? 'გამოკითხვის გაგზავნა' : 'შემდეგი'}</button>
        </form>
    `;

    const form = document.getElementById('survey-form');
    const nextBtn = document.getElementById('survey-next-btn');
    const answerInputs = document.getElementsByName('survey-answer');

    function checkSurveyInputs() {
        const answerSelected = Array.from(answerInputs).some(input => input.checked);
        nextBtn.disabled = !answerSelected;
    }

    answerInputs.forEach(input => input.addEventListener('change', checkSurveyInputs));

    nextBtn.addEventListener('click', async () => {
        const selectedAnswer = Number(document.querySelector('input[name="survey-answer"]:checked').value);
        surveyResponses[currentSurveyIndex] = selectedAnswer;

        if (isLastSurveyQuestion) {
            const totalAnswerChanges = answerChanges.reduce((sum, count) => sum + count, 0);
            const meanConfidence = confidences.reduce((sum, conf) => sum + conf, 0) / confidences.length;
            const totalOCDScore = surveyResponses.reduce((sum, score) => sum + score, 0);
            const results = {
                ParticipantID: participantData.participantID,
                Sex: participantData.sex,
                Age: participantData.age,
                StudentStatus: participantData.studentStatus,
                TotalOCDScore: totalOCDScore,
                TotalAnswerChanges: totalAnswerChanges,
                MeanConfidence: meanConfidence.toFixed(2),
                Timestamp: new Date().toISOString()
            };
            console.log('Results:', results);

            try {
                const docRef = await addDoc(collection(db, "surveyResults"), results);
                console.log("Document written with ID: ", docRef.id);
                alert('ტესტი და გამოკითხვა გაგზავნილია!');
                document.body.innerHTML = `
                    <h2>მადლობა მონაწილეობისთვის!</h2>
                    <p>თქვენი პასუხები შენახულია.</p>
                `;
            } catch (error) {
                console.error('Error adding document: ', error);
                alert('შეცდომა მონაცემების გაგზავნისას. გთხოვთ, სცადეთ თავიდან.');
            }
        } else {
            currentSurveyIndex++;
            renderSurveyQuestion();
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

// Optional: Retained for debugging
function downloadCSV(data, filename) {
    const headers = ['ParticipantID,Sex,Age,StudentStatus,TotalOCDScore,TotalAnswerChanges,MeanConfidence'];
    const rows = data.map(row => 
        `${row.ParticipantID},${row.Sex},${row.Age},${row.StudentStatus},${row.TotalOCDScore},${row.TotalAnswerChanges},${row.MeanConfidence}`
    );
    const csvContent = [...headers, ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    URL.revokeObjectURL(link.href);
}