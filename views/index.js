

class View {
    static displayError(error) {
        console.log(error);
    }
    static displayData(data) {
        console.table(data);
    }
}

module.exports = View;