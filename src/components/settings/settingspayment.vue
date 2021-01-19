<template>
    <div>
        <h1 class="greeting-title mb-5">Select Payout Method</h1>
        <div class="flex mb-28">
            <img class="mr-5" src="../../assets/banktransfer_img.svg" alt="">
            <img class="" src="../../assets/paypal_img.svg" alt="">
        </div>

        <div>
            <div class="grid grid-cols-2 gap-5">                            
                <div class="col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1">
                    <label class="font-bold" for="bank acc"> Bank Account Country</label>
                    <input type="text" class="form-control" placeholder="Bank Account Country">
                </div>                            
                <div class="col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1">
                    <label class="font-bold" for="lastname"> Bank Account Currency</label>                    
                    <input type="text" class="form-control border-none" disabled placeholder="Nigerian Naiara (NGN)">
                </div>                      
            </div>

            <div class="my-5">
                <label class="font-bold" for="dob"> SWIFT BICSWIFT BIC</label>                            
                <div class="grid grid-cols-3 gap-5">
                    <div class="col-span-3 xs:col-span-3 sm:col-span-3 md:col-span-1 lg:col-span-1 xl:col-span-1">
                        <input type="text" class="form-control" placeholder="ABCDEFGHIFJK">
                    </div>
                    <div class="col-span-3 xs:col-span-3 sm:col-span-3 md:col-span-1 lg:col-span-1 xl:col-span-1">
                        <label class="font-bold" for=""></label>
                        <input type="text" class="form-control" placeholder="January">
                    </div>
                    <div class="col-span-3 xs:col-span-3 sm:col-span-3 md:col-span-1 lg:col-span-1 xl:col-span-1">
                        <label class="font-bold" for=""></label>
                        <input type="text" class="form-control">
                    </div>                              
                </div>
            </div>

            <div class="flex payment_footer">
                <button class="cancelBtn mr-4 px-4">Cancel</button>
                <button class="updateBtn">Update Settings</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'settingspayment'
}
</script>

<style>
.cancelBtn {
    background: #fff;
}
.updateBtn{
    background: #DA04F2;
    color: #fff;
    padding: 8px 16px;
}


@media only screen and (max-width: 23.75em) { /** 380px / 16 */
    .payment_footer{
        flex-direction: column;
    }
    
    .cancelBtn {
        margin-bottom: 15px;   
    }
}
</style>