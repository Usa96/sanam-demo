document.addEventListener('DOMContentLoaded', function () {
    const filterLinks = document.querySelectorAll('.portfolio-filter a');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Remove active class from all links
            filterLinks.forEach(link => link.classList.remove('active'));

            // Add active class to clicked link
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            // Filter portfolio items
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var sidebarLinks = document.getElementsByClassName("sidebar-link");
    var widgets = document.getElementsByClassName("custom-widget");

    // Loop through each sidebar link
    for (var i = 0; i < sidebarLinks.length; i++) {
        sidebarLinks[i].addEventListener("click", function(event) {
            event.preventDefault();  // Prevent the default link behavior

            // Remove the 'active' class from all sidebar links
            for (var j = 0; j < sidebarLinks.length; j++) {
                sidebarLinks[j].classList.remove("active");
            }
            // Add the 'active' class to the clicked link
            this.classList.add("active");

            // Hide all widgets
            for (var k = 0; k < widgets.length; k++) {
                widgets[k].classList.remove("active-widget");
            }

            // Get the data-widget attribute of the clicked link
            var widgetId = this.getAttribute("data-widget");

            // Show the corresponding widget
            document.getElementById(widgetId).classList.add("active-widget");
        });
    }
});

// Team member data with image paths
const teamData = {
    waleed: {
        name: "Waleed H. Al Sumait",
        position: "Chairman",
        description: "Mr. Al Sumait has 20+ years of experience in investment. He has a BBA from the United States and multiple investment-related certificates. He has participated in many industry-leading conferences. He joined Wafra in 2000, reaching his current post as Senior Vice President.",
        image: "images/BOD/Mr. Waleed Al Sumait - Chairman.png",
    },
    sulaiman: {
        name: "Dr. Sulaiman T. Al Abduljader",
        position: "Vice Chairman and Chief Executive Officer",
        description: "Dr Sulaiman served as the Vice Chairman of Aqar Real Estate Investment Company, an 80 million USD company listed in Boursa Kuwait, Board member of Al Mal Investment Company, financial services company and head of its internal audit committee, and Vice President of Corporate Finance and Investment Services at Coast Investment and Development Company. He was an advisor to the Kuwait Investment Authority (KIA), Public Authority of Sports, and member of the National Sports Privatization Committee and a board member of Kuwait Olympic Committee. He Chairs the Board of Trustees of RAWAJ Institute and is an Assistant Professor of Finance at Gulf University for Science and Technology (GUST). Dr. Sulaiman was a Visiting Fellow at the Centre of International Studies (CIS) at the London School of Economics and University of Cambridge. His research focus is on alternative investments, sustainable development and financial economics with emphasis on emerging and frontier markets. Dr Sulaiman holds a Bachelor’s degree in Civil Engineering and an MBA (Finance and Real Estate) from the University of Hartford, USA, and a PhD in Financial Economics from Latrobe University, Australia where he received the Outstanding Thesis Award in 2009.",
        image: "images/BOD/Dr. Sulaiman Al Abduljader - Vice Chairman & CEO.png",
    },
    saad: {
        name: "Mr. Saad N. Al Munaifi",
        position: "Board Member",
        description: "Saad Nasser Al Muneefi, Vice President of Assets Management at Kuwait Real Estate Company, possesses over 20 years of experience in the field. He leads the management of local properties, investments, and developments while fostering strong investor relations. Mr. Al Muneefis responsibilities encompass identifying new local opportunities, conducting financial feasibility studies, and formulating best-use scenarios for projects. He focuses on optimizing returns for existing properties, analyzing performance, and providing third-party real estate portfolio advisory. Additionally, he keeps investors and investment managers updated on the companys strategy, business activities, and results. With his extensive expertise, Mr. Al Muneefi plays a vital role in driving the success of Kuwait Real Estate Company.",
        image: "images/BOD/Mr. Saad Al Muneefi - Member.png",
    },
    sulaimanFuraih: {
        name: "Mr. Sulaiman M. Al Furaih",
        position: "Board Member",
        description: "Member of the Audit Committee and Member of the Risk Committee in Sanam Real Estate Company. Mr. Al Furaih is Senior Vice President for Wafra International Investment Company in Kuwait, where he has risen through the ranks over a distinguished 17 years career with the firm. He also serves as the Chairman of the Board of Directors for Marbil Yapi Construction -Turkey and Board member for First Bahrain Real Estate Development Company. Mr. Al Furaih holds a Bachelor of Science degree in Accounting and Auditing from Kuwait University",
        image: "images/BOD/Mr. Sulaiman Al Furaih - Member.png",
    },
    bandar: {
        name: "Mr. Bandar S. Al Jarallah",
        position: "Board Member",
        description: "Bander Sulaiman Al Jarallah is a distinguished entrepreneur and visionary leader with a dynamic career spanning various sectors. Graduating with a BBA in Business Administration and Management from California State University in 2002, he embarked on a journey marked by numerous achievements. As the CEO and founder of Alfouz International and Al Jarallah Group, a role he undertook in 2010 and 2005 respectively, he showcased exceptional business acumen and innovation. His contributions extended further as a board member of First Takaful and IFA Hotels and Resorts, playing a pivotal role in their sustained growth. Al Jarallahs legacy is one of strategic insight, ethical leadership, and unwavering commitment to excellence, leaving an indelible impact on the corporate world.",
        image: "images/BOD/Mr.Bandar-Al-Jarallah-resized-final.jpg",
    },
};
const membersData = {
    waleed: {
        name: "وليد حمد السميط",
        position: "رئيس مجلس الإدارة",
        description: "السيد وليد السميط يتمتع بأكثر من 20 عامًا من الخبرة في مجال الاستثمار. حصل على درجة البكالوريوس في إدارة الأعمال من الولايات المتحدة الأمريكية، إلى جانب العديد من الشهادات المتخصصة في الاستثمار. شارك في مؤتمرات مرموقة داخل القطاع وساهم بخبراته الواسعة. بدأ مسيرته مع شركة وفرة في عام 2000 وشغل عدة مناصب قيادية حتى أصبح نائب الرئيس الأول.",
        image: "images/BOD/Mr. Waleed Al Sumait - Chairman.png",
    },
    sulaiman: {
        name: "الدكتور سليمان طارق العبدالجادر",
        position: "نائب رئيس مجلس الإدارة والرئيس التنفيذي",
        description: "الدكتور سليمان العبدالجادر يمتلك سجلًا حافلًا بالإنجازات في مجالات الاستثمار والإدارة. شغل منصب نائب رئيس مجلس إدارة شركة عقار للاستثمارات العقارية، وهي شركة بقيمة 80 مليون دولار مدرجة في بورصة الكويت، وعضو مجلس إدارة شركة المال للاستثمار ورئيس لجنة التدقيق الداخلي بها. كما كان نائب رئيس التمويل المؤسسي وخدمات الاستثمار في شركة الساحل للتنمية والاستثمار .خدم كمستشار للهيئة العامة للاستثمار والهيئة العامة للرياضة وعضوًا في اللجنة الوطنية لخصخصة الرياضة واللجنة الأولمبية الكويتية. يشغل حاليًا رئاسة مجلس أمناء معهد روافد وأستاذًا مساعدًا للتمويل في جامعة الخليج للعلوم والتكنولوجيا (GUST).حصل الدكتور سليمان على درجة البكالوريوس في الهندسة المدنية وماجستير إدارة الأعمال في التمويل والعقارات من جامعة هارتفورد، ودرجة الدكتوراه في الاقتصاد المالي من جامعة لا تروب بأستراليا، حيث نال جائزة الأطروحة المتميزة لعام 2009. تركز أبحاثه على الاستثمارات البديلة والتنمية المستدامة في الأسواق الناشئة",
        image: "images/BOD/Dr. Sulaiman Al Abduljader - Vice Chairman & CEO.png",
    },
    saad: {
        name: "سعد ناصر المنيفي",
        position: "عضو مجلس الإدارة",
        description: "السيد سعد ناصر المنيفي، نائب رئيس إدارة الأصول في شركة عقارات الكويت ، يتمتع بخبرة تتجاوز 20 عامًا في قطاع العقارات والاستثمارات. يقود إدارة الممتلكات المحلية والمشاريع التطويرية، ويركز على تحديد الفرص الجديدة، ودراسات الجدوى المالية، وتحسين عوائد الممتلكات الحالية .يشمل عمله تعزيز علاقات المستثمرين، تقديم تقارير الأداء، وإبقاء شركاء الاستثمار على اطلاع باستراتيجيات الشركة ونتائجها. بخبرته الواسعة، يلعب السيد المنيفي دورًا رئيسيًا في تعزيز نجاح شركة عقارات الكويت.",
        image: "images/BOD/Mr. Saad Al Muneefi - Member.png",
    },
    sulaimanFuraih: {
        name: "سليمان محمد الفريح",
        position: "عضو مجلس الإدارة",
        description: "يشغل السيد سليمان الفريح منصب عضو لجنة التدقيق ولجنة المخاطر في شركة سنام العقارية. يعمل كنائب الرئيس الأول في شركة وفرة للاستثمار الدولي منذ أكثر من 17 عامًا.كما يرأس مجلس إدارة شركة ماربل يابي للإنشاءات في تركيا، وعضو مجلس إدارة شركة البحرين الأولى للتطوير العقاري. السيد الفريح حاصل على درجة البكالوريوس في المحاسبة والتدقيق من جامعة الكويت، ويتميز بخبرة عميقة في الإدارة المالية والاستثمارات.",
        image: "images/BOD/Mr. Sulaiman Al Furaih - Member.png",
    },
    bandar: {
        name: "بندر سليمان الجار الله",
        position: "عضو مجلس الإدارة",
        description: "السيد بندر سليمان الجار الله هو رجل أعمال بارز وصاحب رؤية استراتيجية. حصل على درجة البكالوريوس في إدارة الأعمال والإدارة من جامعة ولاية كاليفورنيا عام 2002، وبدأ مسيرة مهنية متميزة شملت عدة قطاعات .بصفته الرئيس التنفيذي والمؤسس لشركتي الفوز الدولية ومجموعة الجار الله، التي أسسها في عامي 2005 و2010 على التوالي، أظهر براعة قيادية ورؤية مبتكرة.كما يشغل عضوية مجالس إدارة شركتي التكافل الأولى وفنادق ومنتجعات إيفا، حيث كان له دور فعال في تحقيق نموهما المستدام. إرثه يبرز التزامًا بالتميز والقيادة الأخلاقية، مما يجعله أحد الشخصيات البارزة في عالم الأعمال.",
        image: "images/BOD/Mr.Bandar-Al-Jarallah-resized-final.jpg",
    },
};

function openSidePanel(member) {
    const data = membersData[member];
    const content = `
        <div class="custom-panel-image">
            <img src="${data.image}" alt="${data.name}">
        </div>
        <h4>${data.name}</h4>
        <h5>${data.position}</h5>
        <p>${data.description}</p>
    `;
    document.getElementById("custom-side-panel-content").innerHTML = content;
    document.getElementById("custom-side-panel").style.right = "0"; // Open panel
    document.getElementById("custom-overlay").classList.add("active"); // Show overlay
    document.body.classList.add("custom-modal-open"); // Prevent background scroll
}

function closeSidePanel() {
    const sidePanel = document.getElementById("custom-side-panel");
    sidePanel.style.right = "-100%"; // Ensure panel is completely off-screen
    document.getElementById("custom-overlay").classList.remove("active"); // Hide overlay
    document.body.classList.remove("custom-modal-open"); // Allow background scroll
}


// Function to open the custom side panel with image
function customOpenPanel(memberKey) {
    const member = teamData[memberKey];
    const panelContent = `
        <div class="custom-panel-image">
            <img src="${member.image}" alt="${member.name}">
        </div>
        <h2>${member.name}</h2>
        <h4>${member.position}</h4>
        <p>${member.description}</p>
    `;
    document.getElementById("custom-panel-content").innerHTML = panelContent;
    document.getElementById("custom-side-panel").style.left = "0";
    document.getElementById("custom-overlay").classList.add("active");
    document.body.classList.add("custom-modal-open");
}

// Function to close the custom side panel
function customClosePanel() {
    document.getElementById("custom-side-panel").style.left = "-60%";
    document.getElementById("custom-overlay").classList.remove("active");
    document.body.classList.remove("custom-modal-open");
}

function customClosePanel() {
    const sidePanel = document.getElementById("custom-side-panel");

    // Check if the screen width is less than or equal to 768px (mobile view)
    if (window.innerWidth <= 768) {
        sidePanel.style.left = "-100%"; // Move the panel completely off-screen for mobile
    } else {
        sidePanel.style.left = "-60%"; // Default behavior for desktop
    }

    document.getElementById("custom-overlay").classList.remove("active");
    document.body.classList.remove("custom-modal-open");
}

document.addEventListener("DOMContentLoaded", () => {
    const wordsToCapitalize = [
        { regex: /\bsanams\b/gi, replacement: 'SANAMs' },
        { regex: /\bsanam\b/gi, replacement: 'SANAM' },
        { regex: /\beradat\b/gi, replacement: 'ERADAT' }
    ];

    function capitalizeWords(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            wordsToCapitalize.forEach(({ regex, replacement }) => {
                node.textContent = node.textContent.replace(regex, replacement);
            });
        } else {
            node.childNodes.forEach(capitalizeWords);
        }
    }

    capitalizeWords(document.body);
});

// Function to switch language
const languageToggle = document.getElementById('language-toggle');
if (languageToggle) {
    languageToggle.addEventListener('click', switchLanguage);
}

function switchLanguage() {
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const path = url.pathname;
    const fileName = path.split('/').pop() || 'index'; // Default to 'index' if no file name is present
    const directory = path.replace(fileName, ''); // Get the directory

    let newFileName;

    if (fileName === 'index') {
        // Special case: Home page
        newFileName = 'ar_index';
    } else if (fileName.startsWith('ar_')) {
        // Remove 'ar_' prefix to revert to default language
        newFileName = fileName.replace('ar_', '');
    } else {
        // Add 'ar_' prefix for Arabic
        newFileName = 'ar_' + fileName;
    }

    // Check if the file actually exists (optional if necessary)
    const newUrl = url.origin + directory + newFileName;
    
    // Redirect to the new URL
    window.location.href = newUrl;
}

