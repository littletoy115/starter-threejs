const panorama = new PANOLENS.ImagePanorama('assets/image1.jpeg');
const imagePano = document.querySelector('.pano-tester');
const viewer = new PANOLENS.Viewer({
    container: imagePano,
    autoRotate: true,
    autoRotateSpeed: 0.3,
    controlBar: true,
});
viewer.add(panorama);