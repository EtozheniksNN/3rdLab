function goFindIt() {
    alert("Lets find it");

    const search = document.searchForm.find.value;

    {
        const urlS = "https://www.google.com/search?q=" + search;
    location.href = urlS;
    }
}





