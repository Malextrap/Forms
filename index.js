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

class Select {


    /** SMALL CONSTRUCTORS **/

    constructor(){
        this.colArray = ["primary", "secondary", "terciary", "gray", "dark", "pure_white", "blue", "cyan", "emerald", "green", "salmon", "red", "pink", "grape", "violet", "yellow", "orange", "teal"];
        this.colCode = ["#5A94E0", "#F3F4F8", "#CED2D9", "#7A8599", "#353D4C", "#FFFFFF", "#4595E6", "#22B8CF", "#2ECC71", "#5FB335", "#FA5252", "#F03E3E", "#E64980", "#BE4BDB", "#7950F2", "#FCC419", "#FD7E14", "#12B886"];
        this.select = document.getElementsByName("select");
        this.init();
    }


    /** REST **/

    /**
     * This function set a background
     */
    init(){
        this.select.forEach(e => e.setAttribute('style', "background: " + this.getColor() + " url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmlld0JveD0iMCAtMjU2IDE3OTIgMTc5MiIKICAgaWQ9InN2ZzI5ODkiCiAgIHZlcnNpb249IjEuMSIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMC40OC4zLjEgcjk4ODYiCiAgIHdpZHRoPSIxMDAlIgogICBoZWlnaHQ9IjEwMCUiCiAgIHNvZGlwb2RpOmRvY25hbWU9ImFuZ2xlX2Rvd25fZm9udF9hd2Vzb21lLnN2ZyI+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhMjk5OSI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGRlZnMKICAgICBpZD0iZGVmczI5OTciIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxIgogICAgIG9iamVjdHRvbGVyYW5jZT0iMTAiCiAgICAgZ3JpZHRvbGVyYW5jZT0iMTAiCiAgICAgZ3VpZGV0b2xlcmFuY2U9IjEwIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSI2NDAiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iNDgwIgogICAgIGlkPSJuYW1lZHZpZXcyOTk1IgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBpbmtzY2FwZTp6b29tPSIwLjEzMTY5NjQzIgogICAgIGlua3NjYXBlOmN4PSI4OTYiCiAgICAgaW5rc2NhcGU6Y3k9Ijg5NiIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iMCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iMjUiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJzdmcyOTg5IiAvPgogIDxnCiAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsLTEsMjg4LjU0MjM4LDEyNTUuMDUwOCkiCiAgICAgaWQ9ImcyOTkxIj4KICAgIDxwYXRoCiAgICAgICBkPSJtIDEwNzUsODAwIHEgMCwtMTMgLTEwLC0yMyBMIDU5OSwzMTEgcSAtMTAsLTEwIC0yMywtMTAgLTEzLDAgLTIzLDEwIEwgODcsNzc3IHEgLTEwLDEwIC0xMCwyMyAwLDEzIDEwLDIzIGwgNTAsNTAgcSAxMCwxMCAyMywxMCAxMywwIDIzLC0xMCBMIDU3Niw0ODAgOTY5LDg3MyBxIDEwLDEwIDIzLDEwIDEzLDAgMjMsLTEwIGwgNTAsLTUwIHEgMTAsLTEwIDEwLC0yMyB6IgogICAgICAgaWQ9InBhdGgyOTkzIgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHN0eWxlPSJmaWxsOiAjZmZmZmZmIiAvPgogIDwvZz4KPC9zdmc+Cg==) no-repeat scroll 90%; background-size: 20%;"));
    }


    /** OTHERS **/

    /**
     * This function return a color for the DOM
     * @return {string|*|string}
     */
    getColor(){
        let r = this.colCode[0],
            i = 0;
        const clazz = this.select.forEach(e => e.getAttribute('class'));

        this.colArray.forEach((pos) => {
            if (clazz !== "null" && clazz !== undefined)
                if (clazz.toString().includes(pos))
                    r = this.colCode[i];
            i++;
        });
        return r;
    }


};


document.addEventListener("DOMContentLoaded", function() {
    new Select();
    new Switch();
});
