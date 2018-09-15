/**
 * Created by alejandrorioscalera
 * On 13/12/17
 *
 * -- SOCIAL NETWORKS --
 *
 * GitHub: https://github.com/clonalejandro or @clonalejandro
 * Website: https://clonalejandro.me/
 * Twitter: https://twitter.com/clonalejandro11/ or @clonalejandro11
 * Keybase: https://keybase.io/clonalejandro/
 *
 * -- LICENSE --
 *
 * All rights reserved for clonalejandro ©malextrap 2017 / 2018
 */

class Switch {


    /** SMALL CONSTRUCTORS **/

    constructor(){
        this.switcher = document.querySelectorAll(".switch");
        this.init();
    }


    /** REST **/

    init(){
        this.switcher.forEach(e => {
            const on = e.getAttribute("data-on"),
                  off = e.getAttribute("data-off");

            e.innerHTML += ("<input class=\"switch-input\" type=\"checkbox\" id=\"opt-in\"/>\n" +
                "\t  <span class=\"switch-label\" data-on=" + on + " data-off=" + off + "></span> \n" +
                "  \t<span class=\"switch-handle\"></span>")
            })
    }


};


document.addEventListener("DOMContentLoaded", () => new Switch());
