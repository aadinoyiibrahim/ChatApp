// jQuery lib allows the use of, i.e., $(document).ready(), $() functions, etc.
$(document).ready(function () {
    // handler for the send button
    $("#send-btn").click(function () {
        sendMessage();
    });

    // send message when 'Enter' key is pressed
    $("#message-input").keypress(function (event) {
        if (event.which === 13) { // Enter key == 13
            sendMessage();
        }
    });

    // Title change
    $("#h1").text("CodeChatApp");

    // Array of random responses for the bot
    let responses = [
        "I see!",
        "That's cool!",
        "Interesting!",
        "Oh really?",
        "That's interesting!",
        "Tell me more!",
        "I didn't expect that!",
        "Why do you think that?",
        "I'm here to listen.",
        "That sounds fun!",
        "Could you explain that further?",
        "I'm just a bot, but that sounds important!"
    ];

    /* creating FUNCTION sendMessage: 
        - to send,
        - display the message
        - display the date and timestamp
        - automate a reply starting with "You sent: "
        - append the message to the chat box
        - clear the input field
    */
    function sendMessage() {
        let message = $("#message-input").val().trim(); // Get message input

        if (message !== "") {

            let sendMessageBubble = $('<div class="message sent"></div>').text(message); // Create send message bubble

            // Get current timestamp and format it
            let sendTimestamp = new Date(); // Current date and time
            let sendDay = sendTimestamp.getDate().toString().padStart(2, '0'); // Add leading zero 
            let sendMonth = (sendTimestamp.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based, so add 1
            let sendYear = sendTimestamp.getFullYear(); // Full year

            let sendHours = sendTimestamp.getHours() > 12 ? sendTimestamp.getHours() - 12 : sendTimestamp.getHours(); // 12-hour format
            let sendMinutes = sendTimestamp.getMinutes().toString().padStart(2, '0'); // Add leading zero if needed
            let sendAmpm = sendTimestamp.getHours() >= 12 ? 'PM' : 'AM'; // AM or PM

            let sendFormattedTime = sendHours + ':' + sendMinutes + ' ' + sendAmpm; // Format time as HH:MM AM/PM
            let sendFormattedDate = sendMonth + '/' + sendDay + '/' + sendYear; // Format : MM/DD/YYYY

            let sendFormattedDateTime = sendFormattedDate + ' ' + sendFormattedTime; // Format : MM/DD/YYYY HH:MM AM/PM
            let sendTimeElement = $('<div class="timestamp"></div>').text(sendFormattedDateTime); // Create date & timestamp element

            sendMessageBubble.append(sendTimeElement); // Append timestamp
            $("#chat-box").append(sendMessageBubble); // Append message to chat box
            $("#message-input").val(''); // Clear the input field
            $("#chat-box").scrollTop($("#chat-box")[0].scrollHeight); // Scroll to bottom after sending

            // auto & random response part
            setTimeout(function () {

                let replyResponses = responses[Math.floor(Math.random() * responses.length)]; // Random response
                let replyBubble = $('<div class="message received"></div>').text(replyResponses); // Create reply bubble

                // get time&date
                let replyTimestamp = new Date();
                let replyDay = replyTimestamp.getDate().toString().padStart(2, '0');
                let replyMonth = (replyTimestamp.getMonth() + 1).toString().padStart(2, '0');
                let replyYear = replyTimestamp.getFullYear();

                let replyHours = replyTimestamp.getHours() > 12 ? replyTimestamp.getHours() - 12 : replyTimestamp.getHours();
                let replyMinutes = replyTimestamp.getMinutes().toString().padStart(2, '0');
                let replyAmpm = replyTimestamp.getHours() >= 12 ? 'PM' : 'AM';

                let replyFormattedTime = replyHours + ':' + replyMinutes + ' ' + replyAmpm;
                let replyFormattedDate = replyMonth + '/' + replyDay + '/' + replyYear;

                let replyFormattedDateTime = replyFormattedDate + ' ' + replyFormattedTime;
                let replyTimeElement = $('<div class="timestamp"></div>').text(replyFormattedDateTime);

                replyBubble.append(replyTimeElement);

                $("#chat-box").append(replyBubble);
                $("#chat-box").scrollTop($("#chat-box")[0].scrollHeight); // Scroll to bottom after reply
            }, 1000); // 1 second delay for response
        }
    }
});

