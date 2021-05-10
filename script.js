document.querySelector('.btn').addEventListener('click', function() {
    const year = document.querySelector('.input').value;
    console.log(year, typeof year);

    if (year <= 0 || !year)  {
        document.querySelector('.message').textContent = 'Please enter a valid year';
        document.querySelector('body').style.backgroundColor = '#DC143C';
    }

    else if (year % 4 === 0) {
        if (year % 100 === 0)   {
            if  (year % 400 === 0)  {
                document.querySelector('.message').textContent = 'The year is a leap year';
                document.querySelector('body').style.backgroundColor = 'aquamarine';
            }
            else    {
                document.querySelector('.message').textContent = 'The year is not a leap year';
                document.querySelector('body').style.backgroundColor = '#C0C0C0';
            }
        }
        else    {
            document.querySelector('.message').textContent = 'The year is a leap year';
            document.querySelector('body').style.backgroundColor = 'aquamarine';
        }
    }
    else    {
        document.querySelector('.message').textContent = 'The year is not a leap year';
        document.querySelector('body').style.backgroundColor = '#C0C0C0';
    }

    }
);

document.querySelector('.refresh').addEventListener('click', function() {
    document.querySelector('.message').textContent = 'Start Guessing';
    document.querySelector('body').style.backgroundColor = '#BDB76B';
    document.querySelector('.input').value = '';
}
);