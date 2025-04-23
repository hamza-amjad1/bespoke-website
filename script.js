// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const dropdowns = document.querySelectorAll('.dropdown');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Dropdown Toggle for Mobile
dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('a');
    link.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            dropdown.classList.toggle('active');
        }
    });
});

// Close Menu on Outside Click
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && !navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        dropdowns.forEach(d => d.classList.remove('active'));
    }
});

// Close Menu on Resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        dropdowns.forEach(d => d.classList.remove('active'));
    }
});

const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
let slideInterval = setInterval(nextSlide, 7000);

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
  currentIndex = index;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function goToSlide(index) {
  clearInterval(slideInterval);
  showSlide(index);
  slideInterval = setInterval(nextSlide, 7000);
}




    AOS.init();



    // home services gsap
    
    // Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Register GSAP ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Apply the scroll-triggered animation to each service card
  const serviceCards = document.querySelectorAll('.service-card');
  
  serviceCards.forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 80%", // Trigger animation when card is 80% into the viewport
        end: "top 40%", // Animation end when card reaches 40%
        scrub: true, // Smooth scrolling with scrub
        once: true, // Animation occurs only once when card comes into view
      },
      opacity: 0, // Fade-in effect
      x: 200, // Move from the right
      duration: 1, // Duration of the animation
      delay: index * 0.2, // Stagger each card with a delay
      ease: "power3.out", // Ease for the animation
    });
  });
});





  const swiper = new Swiper('.testimonial-swiper', {
    loop: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    breakpoints: {
      768: {
        slidesPerView: 1.2,
      },
      1024: {
        slidesPerView: 1.5,
      }
    }
  });



  document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The speed at which the counter should animate
    
    counters.forEach(counter => {
        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const current = +counter.innerText;
            const increment = target / speed;

            if(current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(updateCounter, 1);
            } else {
                counter.innerText = target;
            }
        }
        updateCounter();
    });
});





  const scrollBtn = document.getElementById("scrollToTopBtn");

  window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  };

  scrollBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });










// cyber-section

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".cs-tab-btn");
  const contents = document.querySelectorAll(".cs-tab-content");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      // Remove active classes
      tabs.forEach(t => t.classList.remove("cs-active"));
      contents.forEach(c => c.classList.remove("cs-active"));

      // Add active class to clicked tab and corresponding content
      tab.classList.add("cs-active");
      contents[index].classList.add("cs-active");
    });
  });
});





// timeline cyber section
const items = document.querySelectorAll('.cs-timeline-item');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

items.forEach(item => {
  observer.observe(item);
});



 
    
   
// faqs in cybersecurity section
const faqs = [
  {
    q: "How does BTsys protect against phishing attacks?",
    a: "We implement email filters, awareness training, and proactive simulations to reduce phishing risks."
  },
  {
    q: "What makes your cybersecurity solutions unique?",
    a: "We provide custom, layered defense tailored to your business's exact ecosystem."
  },
  {
    q: "How often do you monitor our systems?",
    a: "We provide 24/7 monitoring with real-time alerting and rapid response."
  },
  {
    q: "Do I need cybersecurity if I run a small business?",
    a: "Absolutely. 43% of cyberattacks target small businesses due to low defenses."
  },
  {
    q: "How do you handle zero-day vulnerabilities?",
    a: "Our team uses advanced threat intelligence and quick patch deployment strategies."
  },
  {
    q: "Can you secure remote employees too?",
    a: "Yes! We implement VPNs, endpoint protection, and identity verification for remote teams."
  },
  {
    q: "Do you offer incident response services?",
    a: "Yes. We have a dedicated incident response team to contain and recover quickly."
  },
  {
    q: "What industries do you serve?",
    a: "We serve finance, healthcare, retail, SaaS, and many other sectors."
  }
];

const shuffled = faqs.sort(() => 0.5 - Math.random()).slice(0, 5);
const faqList = document.getElementById("bt-faq-list");

shuffled.forEach((faq) => {
  const item = document.createElement("div");
  item.classList.add("bt-faq-item");
  item.innerHTML = `
    <div class="bt-faq-question">${faq.q}</div>
    <div class="bt-faq-answer">${faq.a}</div>
  `;
  faqList.appendChild(item);
});

document.querySelectorAll(".bt-faq-question").forEach((q) => {
  q.addEventListener("click", () => {
    const item = q.parentElement;
    item.classList.toggle("open");
  });
});



// threat section
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".tid-number");
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-count");
      const count = +counter.innerText;
      const increment = target / 100;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
});
  






// health section


// Optional: Animation or scroll-trigger effect can be added for timeline steps
const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.classList.add('active'); // Add custom active styles for hover or click
    });
    item.addEventListener('mouseout', () => {
        item.classList.remove('active');
    });
});







// learn more in health
// Open the modal
function openModal() {
  document.getElementById("healthModal").style.display = "block";
}

// Close the modal
function closeModal() {
  document.getElementById("healthModal").style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == document.getElementById("healthModal")) {
    closeModal();
  }
}











// business consultancy

  const filterButtons = document.querySelectorAll('.filter-btn');
  const serviceCards = document.querySelectorAll('.service-card');
  const servicesGrid = document.querySelector('.services-grid');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('.filter-btn.active')?.classList.remove('active');
      btn.classList.add('active');

      const category = btn.getAttribute('data-category');

      // Reset grid display when "All" is selected to show all cards in a row
      if (category === 'all') {
        servicesGrid.style.gridTemplateColumns = 'repeat(3, 1fr)'; // 3 cards per row
      } else {
        servicesGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(260px, 1fr))'; // Default responsive grid
      }

      serviceCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });


// text-image pairing
// Detect when elements are in the viewport and apply animation
window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.text-image-pairing');

  elements.forEach(element => {
    if (element.getBoundingClientRect().top <= window.innerHeight * 0.8) {
      element.classList.add('is-visible');
    }
  });
});




// 
document.querySelectorAll('.service-stage').forEach(stage => {
  stage.addEventListener('click', function() {
      const stageId = this.getAttribute('data-stage');
      this.querySelector('.stage-description').classList.toggle('active');
      
      // Change Background or Show Specific Data (Optional)
      changeBackground(stageId);
  });
});

function changeBackground(stageId) {
  let backgroundColor = "#fff";
  
  switch(stageId) {
      case "1":
          backgroundColor = "#cce6ff";
          break;
      case "2":
          backgroundColor = "#e6f9ff";
          break;
      case "3":
          backgroundColor = "#e0f7fa";
          break;
      case "4":
          backgroundColor = "#d0f2ff";
          break;
  }

  document.querySelector('.service-flow').style.backgroundColor = backgroundColor;
}




// faqs business
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  
  question.addEventListener('click', () => {
    item.classList.toggle('active');
    
    // Toggle the display of the answer
    const answer = item.querySelector('.faq-answer');
    if (item.classList.contains('active')) {
      answer.style.display = 'block';
    } else {
      answer.style.display = 'none';
    }
  });
});







// get a quote
document.getElementById("quoteProForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("✅ Thank you! Your quote request was submitted successfully.");
});








// buttons functionality

let cyberbtn = document.querySelector("#cyber-button");
let homebtn = document.querySelector("#home-button");
let healthbtn = document.querySelector('#health-button');
let businessbtn = document.querySelector('#business-button');
let quotebtn=document.querySelector('#contact-btnn');

// all sections
let homesection = document.querySelector(".home-section");
let cybersection = document.querySelector(".cs-section");
let healthsection = document.querySelector('.health-main');
let businesssection = document.querySelector('.business-main');
let quotesection =document.querySelector('#quote-section');

// Initially hide the cyber and health sections
cybersection.style.display = 'none';
healthsection.style.display = 'none';
businesssection.style.display = 'none';
quotesection.style.display='none';


// Event listener for home button
homebtn.addEventListener('click', () => {
  homesection.style.display = 'block';
  quotesection.style.display = 'none';
  cybersection.style.display = 'none';
  healthsection.style.display = 'none';
  businesssection.style.display = 'none';
  
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Event listener for cyber button
cyberbtn.addEventListener('click', () => {
  cybersection.style.display = 'block';
  quotesection.style.display = 'none';
  homesection.style.display = 'none';
  healthsection.style.display = 'none';
  businesssection.style.display = 'none';
  
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Event listener for health button
healthbtn.addEventListener('click', () => {
  healthsection.style.display = 'block';
  quotesection.style.display = 'none';
  homesection.style.display = 'none';
  cybersection.style.display = 'none';
  businesssection.style.display = 'none';
  
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

businessbtn.addEventListener('click', () => {
  businesssection.style.display = 'block';
  quotesection.style.display = 'none';
  homesection.style.display = 'none';
  cybersection.style.display = 'none';
  healthsection.style.display = 'none';
  
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


quotebtn.addEventListener('click', () => {
  quotesection.style.display = 'block';
  homesection.style.display = 'none';
  cybersection.style.display = 'none';
  healthsection.style.display = 'none';
  businesssection.style.display = 'none';
  
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: 'smooth' });
});