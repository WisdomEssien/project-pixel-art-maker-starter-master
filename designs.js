// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(event) {

// Your code goes here!
event.preventDefault();

//we first clear the canvas
removeGrid();
debugger
//declare and initials our variables 
const width = $('#inputWeight').val();
const height = $('#inputHeight').val();
const pixelCanvas = $('#pixelCanvas');
let columnString = '', rowString = '';
let cellId = 0;

//use a nested loop to create our rows and columns
for (let rowCounter = 0; rowCounter < height; rowCounter++) {
    columnString = '';
    for (let columnCounter = 0; columnCounter < width; columnCounter++) {
        columnString += '<td id="' + cellId++ + '"></td>';
    };

    rowString += '<tr>' + columnString + '</tr>';
};

//and finally create our grid by appending the above rows and columns to the table
pixelCanvas.append(rowString);
}

function removeGrid() {
    const pixelCanvas = $('#pixelCanvas');
    pixelCanvas.children().remove();
}

function makeDesign(event) {
    const clickedCellId = $(event.target).attr('id');
    const selectedColor = $('#colorPicker').val() || '#000';
    $('td[id='+ clickedCellId +']').css('backgroundColor',selectedColor);
}

$( function() {
    
    //attach an event listener to submit button
    $('input[type=submit]').click(makeGrid);

    //attach an event listener to pixel canvas grid
    $('#pixelCanvas').click(makeDesign);
})