document.addEventListener("DOMContentLoaded", () =>{
    const allH2 = document.querySelectorAll(".bg-white h2");
    allH2.forEach(h2 => {
        const words = h2.textContent.split(' ');
        h2.innerHTML = words.map((w,i) => ((i + 1) % 3 === 0 ? w + '<br>' :w +' ')).join('');
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const containers = document.querySelectorAll(".menu_container .bg-white");

    containers.forEach(container => {
        const h3 = container.querySelector("h3");
        const originalText = h3.textContent;

        container.addEventListener("mouseenter", () => {
            container.classList.add("hovered"); 
            h3.textContent = "Order Now";        
        });

        container.addEventListener("mouseleave", () => {
            container.classList.remove("hovered");
            h3.textContent = originalText;         
        });
    });
});





