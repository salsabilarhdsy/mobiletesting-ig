const { delay } = require('../../helpers/waitHelper');
describe('Follow account', async () => {
    it('Should be able to follow an account from search bar', async () => {

        // check following numbers
        await $('#profile_tab').click();
        const value = await $('#row_profile_header_textview_following_count').getText();

        // start to follow
        await $('#search_tab').click();
        await $('#action_bar_search_edit_text').click();
        await $('#action_bar_search_edit_text').setValue("salsabilareads");
        await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.FrameLayout[1]/android.widget.FrameLayout/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.LinearLayout').click();
        await $('//android.widget.Button[@content-desc="Follow salsabilareads"]').click();
        await expect($('//android.widget.Button[@content-desc="Following salsabilareads"]')).toHaveText("Following");
        await $('#action_bar_button_back').click()
        await $('#action_bar_button_back').click()
        // assertion on following numbers
        await $('#profile_tab').click();
        let followingAfter = parseInt(value) + 1;
        await expect($('#row_profile_header_textview_following_count')).toHaveText(String(followingAfter));

        });
    });

describe('Send a message', async () => {
    it('Should be able to send message from profile account', async () => {

        // go to profile
        await $('#search_tab').click();
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