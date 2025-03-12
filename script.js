// for header and navbar

var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    function opentab(tabname) {
      for (tablink of tablinks) {
        tablink.classList.remove("active-link");
      }
      for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
      }
      event.currentTarget.classList.add("active-link");
      document.getElementById(tabname).classList.add("active-tab");
    }


// for sidebar menu

var sidemenu = document.getElementById("sidemenu");
    function openmenu() {
      sidemenu.style.right = "0";
    }
    function closemenu() {
      sidemenu.style.right = "-200px";
    }

    // <!-- for work section functionality -->

      const works = document.querySelectorAll('.work');
      const seeMoreBtn = document.getElementById('see-more-btn');
      const filterButtons = document.querySelectorAll('.filter-btn');
      let visibleWorks = 3;
      let currentFilter = 'all';
  
      // Show initial works
      showWorks(visibleWorks, currentFilter);
  
      // Event listener for filter buttons
      filterButtons.forEach(button => {
        button.addEventListener('click', () => {
          // Set active filter
          currentFilter = button.dataset.filter;
          // Reset visible works
          visibleWorks = 3;
          // Update active button style
          filterButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');
          // Show filtered works
          showWorks(visibleWorks, currentFilter);
        });
      });
  
      // Event listener for "See More" button
      seeMoreBtn.addEventListener('click', handleSeeMoreClick);
  
      // Function to handle "See More" button click
      function handleSeeMoreClick() {
        if (seeMoreBtn.textContent === 'See More') {
          visibleWorks += 3;
        } else {
          visibleWorks = 3;
        }
        showWorks(visibleWorks, currentFilter);
      }
  
      // Function to show/hide works based on filter
      function showWorks(num, filter) {
        let filteredWorks = Array.from(works).filter(work => {
          return filter === 'all' || work.dataset.category === filter;
        });
  
        // Hide all works first
        works.forEach(work => work.style.display = 'none');
  
        // Show filtered works up to the current limit
        filteredWorks.forEach((work, index) => {
          if (index < num) {
            work.style.display = 'block';
          }
        });
  
        // Edge Case: Hide "See More" button if filtered works are 3 or fewer
        if (filteredWorks.length <= 3) {
          seeMoreBtn.style.display = 'none';
        } else {
          seeMoreBtn.style.display = 'block';
        }
  
        // Update "See More" button text
        if (num >= filteredWorks.length) {
          seeMoreBtn.textContent = 'See Less';
        } else {
          seeMoreBtn.textContent = 'See More';
        }
      }