document.getElementById('convert').onclick = Convert;
document.getElementById('reset').onclick = resetForm;

function Convert() 
{
    var fahrenheit = document.getElementById("fah").value;
    var celsius = document.getElementById("cel").value;

    if (fahrenheit != '') 
    {
         celsius = (parseFloat(fahrenheit) -32) /1.8;
    } 
    else 
    {
        fahrenheit = (parseFloat(celsius) * 1.8) + 32;
    }

    document.getElementById('fah').value = parseFloat(fahrenheit).toFixed(1);
    document.getElementById('cel').value = parseFloat(celsius).toFixed(1);
}

function resetForm() 
{
    document.getElementById('fah').value = '';
    document.getElementById('cel').value = '';
}