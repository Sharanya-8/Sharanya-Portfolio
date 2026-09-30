/* =========================================
   STARFIELD
========================================= */

const starsContainer =
    document.getElementById("stars");

const numberOfStars = 180;


for (let i = 0; i < numberOfStars; i++) {

    const star =
        document.createElement("div");

    star.classList.add("star");


    const size =
        Math.random() * 3 + 1;


    star.style.width =
        `${size}px`;

    star.style.height =
        `${size}px`;


    star.style.left =
        `${Math.random() * 100}%`;

    star.style.top =
        `${Math.random() * 100}%`;


    star.style.animationDelay =
        `${Math.random() * 5}s`;


    star.style.animationDuration =
        `${2 + Math.random() * 5}s`;


    /*
        Some stars become purple.
    */

    if (Math.random() < 0.12) {

        star.classList.add("purple-star");

    }


    starsContainer.appendChild(star);

}



/* =========================================
   STAR PARALLAX
========================================= */

document.addEventListener(
    "mousemove",
    (event) => {

        const x =
            (event.clientX / window.innerWidth - 0.5);

        const y =
            (event.clientY / window.innerHeight - 0.5);


        starsContainer.style.transform =
            `translate(${x * 8}px, ${y * 8}px)`;

    }
);



/* =========================================
   SKILL FILTER
========================================= */

const filterButtons =
    document.querySelectorAll(".filter");

const skillCards =
    document.querySelectorAll(".skill-card");


filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            filterButtons.forEach(btn => {

                btn.classList.remove("active");

            });


            button.classList.add("active");


            const category =
                button.getAttribute(
                    "data-category"
                );


            skillCards.forEach(card => {

                const cardCategory =
                    card.getAttribute(
                        "data-category"
                    );


                if (
                    category === "all" ||
                    category === cardCategory
                ) {

                    card.style.display =
                        "flex";

                }

                else {

                    card.style.display =
                        "none";

                }

            });

        }
    );

});





/* =========================================
   DSA TOPIC FILTER
========================================= */

const topicButtons =
    document.querySelectorAll(".topic");


topicButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            topicButtons.forEach(btn => {

                btn.classList.remove("active");

            });


            button.classList.add("active");


            selectedTopic =
                button.getAttribute(
                    "data-topic"
                );


            updateProblems();

        }
    );

});


/*
    Start with Easy problems.
*/

updateProblems();



/* =========================================
   MOBILE NAV ACTIVE SECTION
========================================= */

const sections =
    document.querySelectorAll("section");

const mobileLinks =
    document.querySelectorAll(
        ".mobile-nav a"
    );


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const currentSection =
                        entry.target.getAttribute(
                            "id"
                        );


                    mobileLinks.forEach(link => {

                        link.classList.remove(
                            "active"
                        );


                        if (
                            link.getAttribute(
                                "href"
                            ) ===
                            `#${currentSection}`
                        ) {

                            link.classList.add(
                                "active"
                            );

                        }

                    });

                }

            });

        },

        {
            threshold: 0.35
        }

    );


sections.forEach(section => {

    observer.observe(section);

});



/* =========================================
   SMOOTH SCROLL
========================================= */

document
    .querySelectorAll(
        "a[href^='#']"
    )
    .forEach(link => {

        link.addEventListener(
            "click",
            function(event) {

                const target =
                    document.querySelector(
                        this.getAttribute(
                            "href"
                        )
                    );


                if (target) {

                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    });