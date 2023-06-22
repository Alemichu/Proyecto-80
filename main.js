var names_of_peoples = [];

function submit()
{
    var NombreDesconocido = document.getElementById("name1").value;
    names_of_peoples.push(NombreDesconocido);

    console.log(NombreDesconocido);

    console.log(names_of_peoples);

    var longitud_del_arrays = names_of_peoples.length;
    console.log(longitud_del_arrays);
    document.getElementById("display_name").innerHTML = names_of_peoples.toString();
}

function sorting()
{
    names_of_peoples.sort();
    var i = names_of_peoples.join("<br>");
    console.log(names_of_peoples);
    document.getElementById("sorted").innerHTML = i.toString();
}

function show()
{
    var i = names_of_peoples.join("<br>");
    console.log(names_of_peoples);
    document.getElementById("p1").innerHTML = i.toString();
    document.getElementById("sort_button").style.display="block";
}

function searching()
{
    var search = document.getElementById("s1").value;
    var found = 0
    for(var j = 0; j<names_of_peoples.length; j++)
    {
        if(search==names_of_peoples[j])
        {
            found = found + 1;
        };
    }
    document.getElementById("p2").innerHTML = "NOMBRE ENCONTRADO " + found + " VEZ/VECES";
    console.log("NOMBRE ENCONTRADO" + found + "VEZ/VECES");
}