function imgUrlReq(img) {
    var req = {
     method: 'POST',
     url: 'https://mshackimageapi.azurewebsites.net/api/imageapi?code=yrlwmBHn3oGpo9Dy5h0yndytaQjZEao4Ud/OnfrEQLCdTLmJtEeIjQ==',
     headers: {
       'Content-Type': "application/json"
     },
     data: { 'img': String(img) }
    }

    return req;
}


function cvApiReq(url) {
    var req = {
     method: 'POST',
     //url: 'https://southeastasia.api.cognitive.microsoft.com/vision/v1.0/analyze?visualFeatures=Description&language=en',
     url: 'https://southeastasia.api.cognitive.microsoft.com/vision/v1.0/analyze?visualFeatures=Tags&language=en',
     headers: {
       'Content-Type': "application/json",
        'Ocp-Apim-Subscription-Key': "63fd25c94e984ee8aa65c34b59ce094a"
     },
     data: { 'url': url }
    }

    return req;
}

function cvApiReq2(url) {
    var req = {
     method: 'POST',
     url: 'https://southcentralus.api.cognitive.microsoft.com/customvision/v1.0/Prediction/2b00384f-eebb-4d57-85c2-fa64a487608f/url?iterationId=7a9831d8-c0a1-4e27-94c0-38bb9796caa2',
     headers: {
       'Content-Type': "application/json",
        'Prediction-Key': "a4948b813d60417e90a57b749b4c2d39"
     },
     data: { 'Url': url }
    }

    return req;
}