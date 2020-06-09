$(document).ready(function() {

    var $addSkill = $("#addSkill"); 
    var $inputSkill = $("#enterSkill"); 
    var $skillList = $('#listOfSkill'); 
    var $removeSkill = $('.deleteSkill'); 

    $addSkill.on('click', function() {
        if ($inputSkill.val() !== " ") { 
            var inputValue = $inputSkill.val();
            var newSkill = $(`<tr>
                                <td><button class="deleteSkill"> X </button></td> 
                                <td class="skill"> ${inputValue} </td>
                            </tr>`);
            $skillList.append(newSkill);
            $inputSkill.val(" ");
        }
    });

    $skillList.on('click', 'button', function() { 
        $(this).closest('tr').remove();
    });
});
