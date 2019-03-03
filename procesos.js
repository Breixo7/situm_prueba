
$(document).ready(function () {
    let procesos = [];

    /* Process time */
    function process_time() {
        let time = Math.round(Math.random() * (10 - 2) + 2);
        return time;
    }

    /* Process state */
    function process_state() {
        let state = Math.random() >= 0.5;
        if (state) {
            state = "Exito";
        } else {
            state = "Fracaso"
        }
        return state;
    }

    //Validate
    function validate(processName) {
        let processClass = "." + processName;
        let val;
        if ($(processClass).length > 0) {
            // hacer algo aquí si el elemento existe
            val = false;
        } else {
            val = true;
        }
        return val;
    }

    // Update
    function updateTime(processName, processTime) {
        var name = processName;
        var selectorTime = "." + processName + " .prcTime";
        var selectorStatus = "." + processName + " .prcState";
        var count = processTime;

        if (count == 0) {
            let status = process_state();
            $(selectorStatus).text(" " + status);
        } else {
            count -= 1;
            $(selectorTime).text(" " + count);
        }
        setTimeout(updateTime(name, count), 1000);
    }

    // Process Start
    $(".start").click(function () {
        let processName = $(".process_name").val();
        let processTime = process_time();
        let processState = "En cola";
        if (validate(processName)) {
            procesos.push({ processName: processName, processTime: processTime, processState: processState });
            $(".process-list").append("<li class=\"" + processName + "\"><span> " + processName + "</span><span class=\"prcTime\"> " + processTime + "</span><span class=\"prcState\"> " + processState + "</span></li>");
        } else {
            alert("El proceso ya existe");
            $(".process_name").val("");
        }
        updateTime(processName, processTime);
    });

});
