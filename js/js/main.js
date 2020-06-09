$(document).ready(function() {

    var $addSkill = $("#addSkill"); //button
    var $inputSkill = $("#enterSkill"); //input box
    var $skillList = $('#listOfSkill'); //table list of skills
    var $removeSkill = $('.deleteSkill'); //newly created button beside each added skill

    $addSkill.on('click', function() {
        if ($inputSkill.val() !== " ") { //if value of inputBox is not equal to an empty string --> meaning there is content in it
            var inputValue = $inputSkill.val();
            var newSkill = $(`<tr>
                                <td><button class="deleteSkill"> X </button></td> 
                                <td class="skill"> ${inputValue} </td>
                            </tr>`);
            $skillList.append(newSkill);
            $inputSkill.val(" ");
        }
    });

    $skillList.on('click', 'button', function() { //need 3 parameters - add'button'
        $(this).closest('tr').remove();
    });
});


// const btnEl = document.querySelector('button');
// btn.addEventListener('click', function(evt) {
//    const li = document.createElement('li');             //1
//    const inp = document.querySelector('input');     
//    li.textContent = inp.value;                                  //2
//    document.querySelector('ul').appendChild('li');  //3
//    inputEl.value = ' ';     //4
// });
