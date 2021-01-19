<template>
    <div>
        <div class="border-b mb-4 pb-2">
            <h1 class="settings_heademain mb-2 font-bold">Two-factor authentication</h1>
            <p class="font-three mb-4">Two-factor authentication ( 2FA ) makes your account more secure by requiring a special code in addition to your password to log in.</p>

            <h4 class="font-two mb-2">1. Install a two-factor authentication app</h4>
            <p class="font-three">We recommend using Google Authentication for iPhone or Android.</p>            
        </div>

        <div class="border-b mb-4 pb-2">
            <h4 class="font-two mb-2 font-bold">2. Configure the app</h4>
            <p class="font-three">Add your Teklabspace acount to your two-factor authentication app by doing one of the following:</p>
        </div>

        <div class="border-b mb-4 pb-1">
            <img class="my-10" src="../../assets/configure_img.svg" alt="">
            <h4 class="font-two mb-2 font-bold">3. Enter the 6-digit code that the app gene</h4>
            <p class="font-three">Click the 'Enable 2FA' button to enable.</p>
        </div>

        <div class="mb-4">
            <h4 class="font-two mb-2 font-bold">6-digit OTP code </h4>
            <div class="flex">
                <div class="otpbox">
                    <input type="text" class="border otpInput border-gray-900">
                    <button class="enablebtn">Enable 2FA</button>
                </div>
            </div>
        </div>

        <h4 class="font-two mb-2 font-bold">4. Enter the 6-digit code that the app generates</h4>
        
        <p class="font-three my-10">
            You will need backup codes to login in to your account if you lose access to your two-factor device and can't receive the authentication codes. Please keep your backup codes in a safe and accessible place.
        </p>
    </div>
</template>
<script>
// font-one
// font-two
// font-three
// font-title
export default {

}
</script>

<style>
.settings_heademain{
    font-size: 20px;
}

.otpInput {
    display: block;
    margin-right: 30px;
}

.otpbox {
    width: 100%;
    display: flex;
}

.enablebtn{
    background: #DA04F2;
    color: #fff;
    padding: 14px 26px;
}

@media only screen and (max-width: 28.13em) { /** 450px / 16 */
    .otpbox {
        flex-direction: column;
    }

    .otpInput{
        margin-right: 0;
        margin-bottom: 10px;
        padding: 20px;
    }
}
</style>