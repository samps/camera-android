 
//add code here to handle camerafunction 


document.addEventListener("deviceready", onDeviceReady, false);
document.addEventListener("batterystatus",onBatteryStatus, false);

function onBatteryStatus(info) {
	console.log("Level: "+info.level+" Plugged in: "+info.isPlugged);
	alert("Level: "+info.level+" Plugged in: "+info.isPlugged);
}

function onDeviceReady() {
	console.log(navigator.camera);
	//alert('Device is ready!')
    alert("Level: "+batterystatus.level+" Plugged in: "+batterystatus.isPlugged);
}

function TakePhotoUsingCamera() {
	TakePhoto(Camera.PictureSourceType.CAMERA);
}

function TakePhotoFromLibrary() {
	TakePhoto(Camera.PictureSourceType.PHOTOLIBRARY);
}

function onSuccess(imageData) {
	var image = document.getElementById('myImage');
	image.src = 'data:image/jpeg;base64,' + imageData;
}

function onFail(message) {
	alert('Failed because: ' + message);
}

function TakePhoto(sourceType) {
	var camOptions = {
		quality:50,
		destinationType: Camera.DestinationType.DATA_URL,
		sourceType: sourceType,
		correctOrientation: true
	};
navigator.camera.getPicture(onSuccess, onFail, camOptions);
}
