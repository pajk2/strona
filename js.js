var x = prompt("jaki typ lubisz?", "dramaty/komedie/fantasy/mecha");
if (x == "historyczne")
{
    location.href = 'historyczne.html';
}
else
{
    if (x == "dramaty")
    {
        location.href = 'dramaty.html';
    }
    else
    {
        if (x == "komedie")
        {
            location.href = 'komedie.html';
        }
        else
        {
            if (x == "fantasy")
            {
                location.href = 'fantasy.html';
            }
            else
            {
                if (x == "mecha")
                {
                    location.href = 'mecha.html';
                }
                else
                {
                    if (x == "hentai")
                    {
                        location.href = 'hentai.html';
                    }
                    else
                    {
                        location.href = 'pocz.html';
                    }
                }
            }
        }
    }
}