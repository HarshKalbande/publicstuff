// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle")
  const mobileMenu = document.getElementById("mobileMenu")

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("active")

      // Change icon based on menu state
      const icon = menuToggle.querySelector("i")
      if (mobileMenu.classList.contains("active")) {
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-times")
      } else {
        icon.classList.remove("fa-times")
        icon.classList.add("fa-bars")
      }
    })
  }

  // Header scroll effect
  const header = document.querySelector(".header")

  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled")
      } else {
        header.classList.remove("scrolled")
      }
    })
  }

  // Set current year in footer
  const yearElement = document.getElementById("currentYear")
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear()
  }

  // Product image gallery (for product page)
  const thumbnails = document.querySelectorAll(".thumbnail")
  const mainImage = document.querySelector(".main-image img")

  if (thumbnails.length > 0 && mainImage) {
    thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener("click", function () {
        // Update main image
        mainImage.src = this.querySelector("img").src

        // Update active state
        thumbnails.forEach((t) => t.classList.remove("active"))
        this.classList.add("active")
      })
    })
  }

  // Product quantity selector
  const minusBtn = document.querySelector(".quantity-btn.minus")
  const plusBtn = document.querySelector(".quantity-btn.plus")
  const quantityDisplay = document.querySelector(".quantity-display")

  if (minusBtn && plusBtn && quantityDisplay) {
    let quantity = 1

    minusBtn.addEventListener("click", () => {
      if (quantity > 1) {
        quantity--
        quantityDisplay.textContent = quantity
      }
    })

    plusBtn.addEventListener("click", () => {
      quantity++
      quantityDisplay.textContent = quantity
    })
  }

  // Color and size selectors
  const colorOptions = document.querySelectorAll(".color-option")
  const sizeOptions = document.querySelectorAll(".size-option")

  if (colorOptions.length > 0) {
    colorOptions.forEach((option) => {
      option.addEventListener("click", function () {
        colorOptions.forEach((o) => o.classList.remove("active"))
        this.classList.add("active")
      })
    })
  }

  if (sizeOptions.length > 0) {
    sizeOptions.forEach((option) => {
      option.addEventListener("click", function () {
        sizeOptions.forEach((o) => o.classList.remove("active"))
        this.classList.add("active")
      })
    })
  }

  // Add to cart functionality
  const addToCartBtn = document.querySelector(".add-to-cart")
  const cartCount = document.querySelector(".cart-count")

  if (addToCartBtn && cartCount) {
    addToCartBtn.addEventListener("click", () => {
      // Get current cart count
      const count = Number.parseInt(cartCount.textContent)

      // Update cart count
      cartCount.textContent = count + 1

      // Show success message
      alert("Item added to cart!")
    })
  }

  // Newsletter form submission
  const newsletterForm = document.querySelector(".newsletter-form")

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault()

      const emailInput = this.querySelector('input[type="email"]')
      const email = emailInput.value

      if (email) {
        // In a real application, you would send this to your server
        alert("Thank you for subscribing to our newsletter!")
        emailInput.value = ""
      }
    })
  }

  // Product filtering (for collections page)
  const filterOptions = document.querySelectorAll(".filter-option")

  if (filterOptions.length > 0) {
    filterOptions.forEach((option) => {
      option.addEventListener("click", function () {
        // Toggle dropdown or filter functionality would go here
        // This is a simplified example
        alert("Filter option clicked: " + this.textContent.trim())
      })
    })
  }
})

// Image lazy loading
document.addEventListener("DOMContentLoaded", () => {
  const lazyImages = document.querySelectorAll("img[data-src]")

  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const image = entry.target
          image.src = image.dataset.src
          image.removeAttribute("data-src")
          imageObserver.unobserve(image)
        }
      })
    })

    lazyImages.forEach((image) => {
      imageObserver.observe(image)
    })
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    lazyImages.forEach((image) => {
      image.src = image.dataset.src
      image.removeAttribute("data-src")
    })
  }
})

// Smooth scroll for anchor links
document.addEventListener("DOMContentLoaded", () => {
  const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])')

  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: "smooth",
        })
      }
    })
  })
})

