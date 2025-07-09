document.addEventListener(
    "DOMContentLoaded",
    function() {
        const button = 
            document.getElementById("button_color");
            button.addEventListener("click", function() {
            const clrs = [
                "#ffeeaa", 
                "#ffee00", 
                "#ff9963"
            ];
            const ran_clr = clrs[
                Math.floor(
                    Math.random() * clrs.length
                )
            ];
            document.getElementById("Section").style.background = ran_clr;
        })
    }
)
