(function () {
    console.log('Removing promoted search results...');

    const featured = [...document.getElementsByClassName('featured-link-to-hdp jsGlobalListingCardLink')];
    const numnerOfFeatures = featured.length;
    featured.forEach(element => element.parentNode.parentNode.remove());

    const sponsored = [...document.getElementsByClassName('listingCardLabel listingCardLabel-simple listingCardLabel-simple--noPadding')];
    const numnerOfSponsored = sponsored.length;
    sponsored.forEach(element => element.parentNode.parentNode.parentNode.parentNode.remove());

    console.log("Removed " + numnerOfFeatures + " Featured results and " + numnerOfSponsored + " Sponsored results :)");
})();