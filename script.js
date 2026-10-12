//your JS code here. If required.

const output = document.getElementById("output");

function createPromise() {
    const startTime = Date.now();
    const delay = Math.floor(Math.random() * 2000) + 1000;

    return new Promise(resolve => {
        setTimeout(() => {
            const timeTaken = (Date.now() - startTime) / 1000;
            resolve(timeTaken);
        }, delay);
    });
}

const startTime = Date.now();

const promises = [
    createPromise(),
    createPromise(),
    createPromise()
];

Promise.all(promises).then(results => {
    output.innerHTML = "";

    results.forEach((time, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>Promise ${index + 1}</td>
            <td>${time.toFixed(3)}</td>
        `;
        output.appendChild(row);
    });

    const totalTime = (Date.now() - startTime) / 1000;

    const totalRow = document.createElement("tr");
    totalRow.innerHTML = `
        <td><strong>Total</strong></td>
        <td>${totalTime.toFixed(3)}</td>
    `;
    output.appendChild(totalRow);
});

