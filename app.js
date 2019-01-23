window.addEventListener("load", function() {
    document.getElementById("calc").addEventListener('click', () => {
        q1  = document.getElementById("q1").value
        q2  = document.getElementById("q2").value
        final  = document.getElementById("final").value
        console.log(q1, q2, final)
        // Begin math
        q1Mathed = 0.4 * q1;
        q2Mathed = 0.4 * q2;
        subtract = q1Mathed + q2Mathed;
        a = final - subtract;
        fin = a * 5;
        // End math
        console.log(fin.toFixed(1));
        document.getElementById("finalPercent").innerText = fin.toFixed(1) + "%";
        if (fin > 96) {
            document.getElementById('letter').innerText = "A+"
        } else
        if (fin > 89) {
            document.getElementById('letter').innerText = "A"
        } else
        if (fin > 86) {
            document.getElementById('letter').innerText = "B+"
        } else
        if (fin > 79) {
            document.getElementById('letter').innerText = "B"
        } else
        if (fin > 76) {
            document.getElementById('letter').innerText = "C+"
        } else
        if (fin > 69) {
            document.getElementById('letter').innerText = "C"
        } else
        if (fin > 64) {
            document.getElementById('letter').innerText = "D"
        } else {
            document.getElementById('letter').innerText = "E"
        }
        // 40% of q1 + 40% of q2 + 20% of midterm = semester 1 grade
    })
    console.log('loaded')
})