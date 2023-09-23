describe('Send a message', async () => {
    it('Should be able to send message from profile account', async () => {

        // go to profile
        await $('//android.widget.FrameLayout[@content-desc="Search and explore"]/android.widget.ImageView').click();
        await $('#action_bar_search_edit_text').click();
        await $('#action_bar_search_edit_text').setValue("salsabilareads");
        await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.FrameLayout[1]/android.widget.FrameLayout/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.LinearLayout').click();
        
        // send message
        await $('//android.widget.Button[@content-desc="Message"]/android.widget.TextView').click();
        await $('#row_thread_composer_edittext').click()
        await $('#row_thread_composer_edittext').setValue("Hi!");
        await $('#row_thread_composer_button_send').click()

        // assertion 
        await expect($('#direct_text_message_text_view')).toHaveText("Hi!");
        });
    });
    driver.quit();