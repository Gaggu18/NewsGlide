const world = Globe()(document.getElementById('globe-container'))
.globeImageUrl('https://unpkg.com/three-globe/example/img/earth-night.jpg')
.bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
.backgroundColor('#000')
.width(window.innerWidth)
.height(window.innerHeight)
.pointsData([
    
        { lat: 35.689487, lng: 139.691711, size: 1, name: "Tokyo" },
        { lat: 48.856613, lng: 2.352222, size: 1, name: "Paris" },
        { lat: -33.868820, lng: 151.209290, size: 1, name: "Sydney" },
        { lat: 55.755825, lng: 37.617298, size: 1, name: "Moscow" },
        { lat: 34.052235, lng: -118.243683, size: 1, name: "Los Angeles" },
        { lat: -22.906847, lng: -43.172897, size: 1, name: "Rio de Janeiro" },
        { lat: 39.904202, lng: 116.407394, size: 1, name: "Beijing" },
        { lat: 19.076090, lng: 72.877426, size: 1, name: "Mumbai" },
        { lat: 41.902782, lng: 12.496366, size: 1, name: "Rome" },
        { lat: 52.520008, lng: 13.404954, size: 1, name: "Berlin" },
        { lat: 37.774929, lng: -122.419418, size: 1, name: "San Francisco" },
        { lat: 31.230391, lng: 121.473701, size: 1, name: "Shanghai" },
        { lat: 51.165691, lng: 10.451526, size: 1, name: "Germany (Central)" },
        { lat: -1.286389, lng: 36.817223, size: 1, name: "Nairobi" },
        { lat: -26.204103, lng: 28.047304, size: 1, name: "Johannesburg" },
        { lat: 43.651070, lng: -79.347015, size: 1, name: "Toronto" },
        { lat: 1.352083, lng: 103.819836, size: 1, name: "Singapore" },
        { lat: 35.689198, lng: 51.388973, size: 1, name: "Tehran" },
        { lat: 40.416775, lng: -3.703790, size: 1, name: "Madrid" },
        { lat: -34.603722, lng: -58.381592, size: 1, name: "Buenos Aires" }
    
    
])
.pointAltitude(() => 0.1)
.pointLabel(({ name }) => `<b>${name}</b><br>News: Coming soon!`);

async function fetchNews(country) {
const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=b030cf031dd4410ba0575fc2fd11f7c3`);
const data = await response.json();
return data.articles.map(article => `<p>${article.title}</p>`).join('');
}
