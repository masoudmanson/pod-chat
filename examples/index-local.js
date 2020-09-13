var Chat = require('../src/chat.js');

var params = {
    appId: new Date().getTime(),

    /**
     * ActiveMQ Config
     */
    // protocol: "queue",
    // queueHost: "10.56.16.25",
    // queuePort: "61613",
    // queueUsername: "root",
    // queuePassword: "zalzalak",
    // queueReceive: "queue-in-amjadi-stomp",
    // queueSend: "queue-out-amjadi-stomp",
    // queueConnectionTimeout: 20000,
    // serverName: "chat-server",

    /**
     * Main Server
     */
    // socketAddress: 'wss://msg.pod.ir/ws', // {**REQUIRED**} Socket Address
    // ssoHost: 'https://accounts.pod.ir', // {**REQUIRED**} Socket Address
    // platformHost: 'https://api.pod.ir/srv/core', // {**REQUIRED**} Platform Core Address
    // fileServer: 'https://core.pod.ir', // {**REQUIRED**} File Server Address
    // podSpaceFileServer: 'https://podspace.pod.ir', // {**REQUIRED**} File Server Address
    // serverName: 'chat-server', // {**REQUIRED**} Server to to register on

    /**
     * Sand Box
     */
    socketAddress: "wss://chat-sandbox.pod.ir/ws", // {**REQUIRED**} Socket Address
    ssoHost: "https://accounts.pod.ir", // {**REQUIRED**} Socket Address
    platformHost: "https://sandbox.pod.ir:8043/srv/basic-platform", // {**REQUIRED**} Platform Core Address
    fileServer: 'https://core.pod.ir', // {**REQUIRED**} File Server Address
    podSpaceFileServer: 'http://172.16.110.61:8780/podspace', // {**REQUIRED**} File Server Address
    serverName: "chat-server", // {**REQUIRED**} Server to to register on

    /**
     * Integration
     */
    // socketAddress: "ws://172.16.110.235:8003/ws",
    // ssoHost: "http://172.16.110.76",
    // platformHost: "http://172.16.110.235:8003/srv/bptest-core",
    // fileServer: 'https://core.pod.ir',
    // podSpaceFileServer: 'http://172.16.110.61:8780/podspace', // {**REQUIRED**} File Server Address
    // serverName: "chatlocal",

    grantDeviceIdFromSSO: false,
    enableCache: false, // Enable Client side caching
    fullResponseObject: false,
    mapApiKey: '8b77db18704aa646ee5aaea13e7370f4f88b9e8c',
    // typeCode: "talk",
    token: "100b9646673e4f80ae49b2ad7502b8aa",
    // token: "f19933ae1b1e424db9965a243bf3bcd3", // {**REQUIRED**} SSO Token ZiZi
    // token: "81025b3fbc1a4f7184c3600a2f874673", //  {**REQUIRED**} SSO Token JiJi
    // token: "3c4d62b6068043aa898cf7426d5cae68", // {**REQUIRED**} SSO Token FiFi
    // token: "49c1a43116764ae2ab965a6c40bb46d3", // {**REQUIRED**} SSO Token Masoud
    // token: "bebc31c4ead6458c90b607496dae25c6", // {**REQUIRED**} SSO Token Alexi
    // token: "e4f1d5da7b254d9381d0487387eabb0a", // {**REQUIRED**} SSO Token Felfeli
    // token: "6f5b9aba52414efaa0073a1178c5881f", // maBOT
    wsConnectionWaitTime: 500, // Time out to wait for socket to get ready after open
    connectionRetryInterval: 5000, // Time interval to retry registering device or registering server
    connectionCheckTimeout: 10000, // Socket connection live time on server
    messageTtl: 24 * 60 * 60, // Message time to live (1 day in seonds)
    reconnectOnClose: true, // auto connect to socket after socket close
    httpRequestTimeout: 30000,
    httpUploadRequestTimeout: 0, // 0 means No timeout
    asyncLogging: {
        onFunction: true, // log main actions on console
        onMessageReceive: true, // log received messages on console
        onMessageSend: true, // log sent messaged on console
        actualTiming: true // log actual functions running time
    }
};

var chatAgent = new Chat(params),
    PID;

var chatReadyEventCallback = chatAgent.on('chatReady', function () {
    /*******************************************************
     *                  I S    T Y P I N G                 *
     *******************************************************/
    // chatAgent.startTyping({ threadId: 7448 });

    // setTimeout(function () {
    //     chatAgent.stopTyping();
    // }, 15000);

    // chatAgent.getAllUnreadMessagesCount({
    //     mute: false
    // }, function(result) {
    //     console.log('GEt All Unread Messages Count = ', result);
    // });

    // chatAgent.isPublicThreadNameAvailable({
    //     uniqueName: "uniquep"
    // }, function(result) {
    //     console.log('Check Public Thread Name Availability', result);
    // });

    /*******************************************************
     *                       U S E R                       *
     *******************************************************/
    // chatAgent.deleteCacheDatabase();
    /**
     *  Get User Info
     */
    // getUserInfo();

    /**
     * Update Chat Profile
     */
    // chatAgent.updateChatProfile({
    //     bio: 'To be or not to be ...',
    //     metadata: {
    //         nickName: 'Masoudi'
    //     }
    // }, function(result) {
    //     console.log('Update Chat Profile Result', result);
    // });

    /**
     * Get Unseen Duration of users
     */
    // chatAgent.getNotSeenDuration({
    //     userIds: [122, 123]
    // }, function(result) {
    //     console.log(result);
    // });

    /*******************************************************
     *                    T H R E A D S                    *
     *******************************************************/

    /**
     * GET THREADS
     * @param count
     * @param offset
     * @param threadIds
     * @param name
     */
    // getThreads({
    //     // count:4,
    //     // offset: 0,
    //     // new: true,
    //     //   partnerCoreContactId: 63533و
    //     // threadIds: [11954],
    //     name: "fifi"
    // });

    // chatAgent.getAllThreadList({
    //     summary: true,
    //     cache: false
    // }, function(result) {
    //     // console.log(result);
    // });

    /**
     * CREATE THREAD (Creates Group)
     * @param invitees
     * @param threadType
     */
    // createThread([{
    //   id: 921069,
    //   type: "TO_BE_USER_CONTACT_ID"
    // }, {
    //   id: 934363,
    //   type: "TO_BE_USER_CONTACT_ID"
    // }], "NORMAL");

    /**
     * CREATE THREAD (Creates P2P Chat with a specific user)
     * @param contactId
     */
    // createThread({id: 'p.pahlevani', type: "TO_BE_USER_USERNAME"});

    /**
     * GET THREAD PARTICIPANTS
     * @param threadId
     */
    // getThreadParticipants(6788);

    // chatAgent.getThreadAdmins({threadId: 6729}, function(result){
    //     console.log("Get Thread Admins result", result.result.participants);
    // });

    // chatAgent.getParticipantRoles({
    //     threadId: 7430
    // }, function (result) {
    //     console.log('Get Participant Roles Result', result);
    // });

    /**
     * ADD PARTICIPANTS
     * @param threadId
     * @param contacts {Array}  CONTACT ID or USERNAMES
     */
    // addParticipants(7064, 'contact', [7741]);
    // addParticipants(7064, 'username', ['emmaBOT']);
    // addParticipants(7064, 'coreuserid', [2]); //15508?
    //
    /**
     * REMOVE PARTICIPANTS
     * @param threadId
     * @param participants {Array}  USER ID
     */
    // removeParticipants(7064, [18399]);

    /**
     * LEAVE THREAD
     * @param threadId
     */
    // leaveThread(6881);

    /**
     * JOIN THREAD
     * @param uniqueName
     */
    // chatAgent.joinPublicThread({
    //     uniqueName: "joinmeifyoucan"
    // }, function(result) {
    //     console.log('Join Thread Result', result);
    // });

    /**
     * CLEAR THREAD HISTORY
     * @param threadId
     */
    // chatAgent.clearHistory({
    //     threadId: 54436
    // }, function(result) {
    //     console.log("Clear history result", result);
    // });

    /**
     * GET THREAD HISTORY
     * @param count
     * @param offset
     * @param threadId
     * @param firstMessageId
     * @param lastMessageId
     * @param metaQuery
     * @param query
     */
    // getHistory({
    //     count: 5,
    //     // offset: 0,
    //     threadId: 2858,
    //     // uniqueIds: ["1a3b3976-c149-49e1-c4ea-f14c9ee93d83", "c6651cb4-b823-4157-fff0-52052247730c"],
    //     // id: 79290,
    //     messageType: 'POD_SPACE_VIDEO'
    // });

    // getHistory({
    // count: 10,
    // offset: 0,
    // threadId: 4441,
    // uniqueIds: ["5fc5b138-498c-4da4-d440-5c8bfc7159ee", "93d7991c-add1-4227-d792-ad1bfb03e094", "ad0ae288-6e11-4621-fe50-ea1b634e80c7", "d9aa1833-5f27-4a1d-f5bd-5ae298d2bfa3", "f50fda14-ef88-4071-b3f2-248a18b4ffcf", "redsf233f23rfdsfsdfs"],
    // id: 34890,
    // order: "ASC",
    // query: "hello",
    // fromTime: 1557037111638,
    // fromTimeNanos: 638489000,
    // toTime: 1557037111638,
    // toTimeNanos: 638489000,
    // metadataCriteria: {
    //     'field': 'id',
    //     'gt': 667,
    //     'and': [
    //         {
    //             'field': 'name',
    //             'has': 'Mas'
    //         },
    //         {
    //             'field': 'active',
    //             'is': 1
    //         },
    //         {
    //             'field': 'address.building.age',
    //             'lte': 11
    //         }
    //     ],
    // }
    // });

    // chatAgent.resendMessage("0c00552d-c291-4c0c-bec9-81f870edf170");

    /**
     * GET SINGLE MESSAGE
     * @param threadId
     * @param messageId
     */
    // getSingleMessage(312, 16955);

    /**
     * MUTE THREAD
     * @param threadId
     */
    // muteThread(6968);

    /**
     * UNMUTE THREAD
     * @param threadId
     */
    // unMuteThread(6968);

    /**
     * PIN THREAD
     * @param threadId
     */
    // pinThread(10984);

    /**
     * UNPIN THREAD
     * @param threadId
     */
    // unPinThread(7360);

    /**
     * UPDATE THREAD INFO
     * @param threadId
     */
    // chatAgent.updateThreadInfo({
    //   threadId: 13502,
    //   image: "http://tomahawk-music.eu/wp-content/uploads/2019/04/heavy_metal-900x675.jpg",
    //   description: "توضیحات ترد",
    //   title: "Hallelujah",
    //   metadata: {
    //     id: 1152,
    //     owner: "masoudmanson",
    //     name: "John Doe"
    //   }
    // }, function(result) {
    //   console.log(result);
    // });

    /**
     * SPAM P2P THREAD
     * @param threadId
     */
    // chatAgent.spamPvThread({
    //     threadId: 7438
    // }, function (result) {
    //     console.log(result);
    // });

    /**
     * SET ADMIN
     * @param threadId
     * @param userId
     * @param roles
     */
    // chatAgent.setAdmin({
    //     threadId: 7064,
    //     admins: [
    //         {
    //             userId: 2,
    //             roles: [
    //                 'post_channel_message',
    //                 'edit_message_of_others',
    //                 'delete_message_of_others',
    //                 'add_new_user',
    //                 'remove_user',
    //                 'thread_admin',
    //                 'add_rule_to_user',
    //                 'remove_role_from_user',
    //                 'read_thread',
    //                 'edit_thread'
    //             ]
    //         }]
    // }, function (result) {
    //     console.log(result);
    // });

    // chatAgent.removeAdmin({
    //     threadId: 7430,
    //     admins: [
    //         {
    //             userId: 15510,
    //             roles: [
    //                 'post_channel_message',
    //                 'edit_message_of_others',
    //                 'delete_message_of_others',
    //                 'add_new_user',
    //                 'remove_user',
    //                 'thread_admin',
    //                 'add_rule_to_user',
    //                 'remove_role_from_user',
    //                 'read_thread',
    //                 'edit_thread'
    //             ]
    //         }]
    // }, function (result) {
    //     console.log(result);
    //     console.log(result.result[0]);
    // });

    /*******************************************************
     *                   M E S S A G E S                   *
     *******************************************************/

    /**
     * PIN MESSAGE
     * @param messageId
     * @param notifyAll
     */
    // chatAgent.pinMessage({
    //     messageId: 99290,
    //     notifyAll: true
    // }, function (result) {
    //     console.log('Pin message result', result);
    // });

    /**
     * UNPIN MESSAGE
     * @param messageId
     * @param notifyAll
     */
    // chatAgent.unPinMessage({
    //     messageId: 86364,
    //     notifyAll: true
    // }, function(result){
    //     console.log('unPin message result', result);
    // });

    /**
     * SEND MESSAGE IN THREAD
     * @param threadId
     * @param newMessage
     * @param metadata
     */
    // setInterval(() => {
    // sendMessage(4441, '@poddraw Message From Masoud at ' + new Date(), {
    //     id: 666,
    //     type: 'message',
    //     name: 'Masoud',
    //     address: {
    //         street: 'shariati',
    //         plaque: 13,
    //         building: {
    //             color: 'black',
    //             age: 11
    //         }
    //     },
    //     active: 0
    // });
    // }, 1000);

    // chatAgent.seen({
    //     messageId: 83323,
    //     ownerId: 323232
    // });
    //
    // chatAgent.getAllMentionedMessages({
    //     threadId: 7064
    // }, function(result) {
    //     console.log('All Mentioned List');
    //     console.log(result);
    // });
    // //
    // chatAgent.getUnreadMentionedMessages({
    //     threadId: 7064
    // }, function(result) {
    //     console.log('Unread Mentioned List');
    //     console.log(result);
    // });

    /**
     * SEND FILE MESSAGE IN THREAD
     * @param threadId
     * @param file
     * @param caption
     * @param metadata
     */
    // sendFileMessage(54436, __dirname + "/../test/test.jpg", "Sample file description", {
    //     custom_name: "John Doe"
    // }, '5GW93QH695O7HC');

    // createThreadWithFile(
    //     __dirname + "/../test/test.jpg",
    //     [{
    //         id: 934363,
    //         type: "TO_BE_USER_CONTACT_ID"
    //     }
    //     ],
    //     "NORMAL");

    /**
     * Send Location Message
     *
     * @param  {string}   type           Map style (default standard-night)
     * @param  {int}      zoom           Map zoom (default 15)
     * @param  {object}   center         Lat & Lng of Map center as a JSON
     * @param  {int}      width          width of image in pixels (default 800px)
     * @param  {int}      height         height of image in pixels (default 600px)
     * @param  {int}      threadId       Thread Id
     * @param  {string}   caption        Image Caption
     * @param  {string}   metadata       Message MetaData
     */

    // var sendLocationMessageInstantResponse = chatAgent.sendLocationMessage({
    //     mapType: "standard-night",
    //     mapZoom: 16,
    //     mapCenter: {
    //         lat: 35.7034534,
    //         lng: 51.3776390
    //     },
    //     mapWidth: 1200,
    //     mapHeight: 500,
    //     threadId: 54436,
    //     userGroupHash: '5GW93QH695O7HC',
    //     caption: "This is the Address on map!",
    //     systemMetadata: {
    //         time: new Date()
    //     }
    // }, function(result) {
    //     console.log(result);
    // });
    //
    // console.log('sendLocationMessageInstantResponse', sendLocationMessageInstantResponse);

    /**
     * SEND BOT MESSAGE IN THREAD
     * @param messageId
     * @param receiverId
     * @param newMessage
     */
    // sendBotMessage(14954, 121, {
    //   command: "reverse",
    //   lat: "35.7003510",
    //   lng: "51.3376472"
    // });

    /**
     * EDIT MESSAGE IN THREAD
     * @param messageId  325 editable: false
     * @param newMessage
     */
    // editMessage(99290, "*****************************************" + new Date(), {name: 'masoud'});

    /**
     * DELETE MESSAGE IN THREAD
     * @param {int}      messageId
     * @param {boolean}  deleteForAll
     */
    // deleteMessage(92293, false);
    // deleteMessage(361547, true);
    //
    // chatAgent.deleteMultipleMessages({
    //     messageIds: [152820, 152821, 152822],
    //     deleteForAll: true
    // }, function(result) {
    //     console.log("Delete Multiple Message Result", result);
    // });

    /**
     * REPLY TO MESSAGE
     * @param threadId
     * @param replyToMessageId
     * @param file
     * @param content
     */
    // replyMessage(1431, 32174, "This is a reply to message #31558 at " + new Date());

    /**
     * REPLY FILE MESSAGE
     * @param threadId
     * @param messageId
     */
    // replyFileMessage(54436, 569279, __dirname + "/test.jpg", "This is a reply to message #533218 at " + new Date(), '5GW93QH695O7HC');

    /**
     * FORWARD MESSAGE
     * @param destination
     * @param messageIds
     */
    // forwardMessage(7648, [91297]);

    /**
     * GET MESSAGE SEEN LIST
     * @param messageId
     */
    // chatAgent.getMessageSeenList({
    //   messageId: 6972
    // }, function(seenList) {
    //   console.log("Seen list", seenList);
    // });

    /**
     * GET MESSAGE DELIVERED LIST
     * @param messageId
     */
    // chatAgent.getMessageDeliveredList({
    //   messageId: 19623
    // }, function(seenList) {
    //   console.log("Delivery list", seenList);
    // });

    /*******************************************************
     *                   C O N T A C T S                   *
     *******************************************************/

    /**
     * GET CONTACTS
     */
    // getContacts({
    //     count: 2,
    //     offset: 0,
    // query: "پوریا"
    // });

    /**
     * BLOCK CONTACT
     * @param contactId
     */
    // chatAgent.block({
    //   contactId: 7724,
    //   // threadId: 6848,
    //   // userId: 15550
    // }, function(result) {
    //   console.log(result);
    //   if (!result.hasError)
    //     console.log("Contact has been successfully Blocked!");
    // });

    /**
     * GET BLOCKED CONTACTS LIST
     * @param count
     * @param offset
     */
    // getBlockedList();

    /**
     * UNBLOCK CONTACT
     * @param blockId
     */
    // chatAgent.unblock({
    //   blockId: 2162,
    //   // contactId: 2247,
    //   // threadId: 293,
    //   // userId: 221
    // }, function(result) {
    //   if (!result.hasError)
    //     console.log("Contact has been successfully unBlocked!");
    //   console.log(result);
    // });

    /**
     * ADD CONTACTS
     * @param firstName
     * @param lastName
     * @param cellphoneNumber
     * @param email
     */
    var addContactInstantResult = chatAgent.addContacts({
        firstName: "Ahmad",
        lastName: "Sajadi",
        cellphoneNumber: "09158245345",
        // email: "zabbix_bot_1@fanap.ir",
        // username: "zabbix_bot_1"
    }, function (result) {
        console.log(result);
        console.log(result.contacts);
    });

    /**
     * UPDATE CONTACTS
     * @param id
     * @param firstName
     * @param lastName
     * @param cellphoneNumber
     * @param email
     */
    // chatAgent.updateContacts({
    //   id: "2313",
    //     firstName: "Nigul",
    //     lastName: "Niguli",
    //     cellphoneNumber: "09044661263",
    //     email: "niguli@fanap.ir"
    // }, function(result) {
    //   console.log(result.result);
    // });

    /**
     * REMOVE CONTACTS
     * @param id
     */
    // chatAgent.removeContacts({
    //     id: "2247"
    // }, function (result) {
    //     console.log(result);
    // });

    /**
     * SEARCH CONTACTS
     * @link http://sandbox.pod.ir:8080/apidocs/swagger-ui.html?srv=/nzh/listContacts
     */
    // chatAgent.searchContacts({
    //   // cellphoneNumber: "0912", // LIKE
    //   id: 563, // EXACT
    //   // firstName: "m", // LIKE
    //   // lastName: "ra", // LIKE
    //   // email: "ish", // LIKE
    //   // uniqueId: "2653b39d-85f0-45cf-e1a2-38fbd811872c", // EXACT
    //   // q: "m" // LIKE in firstName, lastName, email
    // }, function(result){
    //   if (!result.hasError) {
    //     console.log(result);
    //     console.log(result.result);
    //   }
    // });

    /*******************************************************
     *               F I L E   U P L O A D S               *
     *******************************************************/

    /**
     * UPLOAD IMAGE
     * @param  {string}  image     Image path
     * @param  {int}     xC        Crop start x coordinates
     * @param  {int}     yC        Crop start y coordinates
     * @param  {int}     hC        Crop height
     * @param  {int}     wC        Crop width
     */
    // uploadImage(__dirname + "/../test/test.jpg", 0, 0, 400, 400);

    /**
     * GET IMAGE
     * @param  {int}     imageId     Image ID
     * @param  {string}  hashCode    Hash Code
     */
    // getImage(67545, '16f0df1947c-0.1837058008746586');

    /**
     * UPLOAD FILE
     * @param  {string}  file     File path
     */
    // uploadFile(__dirname + "/test/test.txt");

    /**
     * GET FILE
     * @param  {int}     fileId          Image ID
     * @param  {string}  hashCode        Hash Code
     * @param  {boolean} downloadable    Downloadable link or not?
     */
    // getFile(344, '196CHI61NUROW8S1', true);

    /*******************************************************
     *                 N E S H A N   M A P                 *
     *******************************************************/

    /**
     * Get Address of a GeoLocation point
     *
     * @param  {float}   lat     Latitute of the Location
     * @param  {float}   lng     Longtitute of the Location
     */
    // chatAgent.mapReverse({
    //   lat: 35.7003508,
    //   lng: 51.3376460
    // }, function(result) {
    //   console.log(result);
    // });

    /**
     * Get nearby places names as "term" keyword
     * around the given GeoLocation
     *
     * @param  {float}   lat     Latitute of the Location
     * @param  {float}   lng     Longtitute of the Location
     * @param  {string}  term    Search term to be searched
     */
    // chatAgent.mapSearch({
    //   lat: 35.7003508,
    //   lng: 51.3376460,
    //   term: "فروشگاه"
    // }, function(result) {
    //   console.log(result);
    // });

    /**
     * Get routing between two given GeoLocations
     *
     * @param  {object}   origin         Lat & Lng of Origin as a JSON
     * @param  {object}   destination    Lat & Lng of Destination as a JSON
     * @param  {boolean}  alternative    Give Alternative Routs too
     */
    // chatAgent.mapRouting({
    //   origin: {
    //     lat: 35.7003508,
    //     lng: 51.3376460
    //   },
    //   destination: {
    //     lat: 35.7343510,
    //     lng: 50.3376472
    //   },
    //   alternative: true
    // }, function(result) {
    //   console.log(result);
    // });

    /**
     * Get Static Image of a GeoLocation
     *
     * @param  {string}   type           Map style (default standard-night)
     * @param  {int}      zoom           Map zoom (default 15)
     * @param  {object}   center         Lat & Lng of Map center as a JSON
     * @param  {int}      width          width of image in pixels (default 800px)
     * @param  {int}      height         height of image in pixels (default 600px)
     */
    // chatAgent.mapStaticImage({
    //   type: "standard-night",
    //   zoom: 15,
    //   center: {
    //     lat: 35.7003508,
    //     lng: 51.3376462
    //   },
    //   width: 800,
    //   height: 500
    // }, function(result) {
    //   console.log(result);
    // });

    /*
     * Create Bot
     */
    // chatAgent.createBot({
    //     botName: 'secondBOT'
    // }, (result) => {
    //     console.log('createBot ersult in index', result.result);
    // });

    /*
     * Define Bot Commands
     */
    // chatAgent.defineBotCommand({
    //     botName: 'secondBOT',
    //     commandList: ['hola', 'poop', 'pee', 'bark', 'run', 'fetch', 'pet']
    // }, (result) => {
    //     console.log('Define Bot Command result', result);
    // });

    // chatAgent.getThreadParticipants({
    //     threadId: 7730
    // }, function(result) {
    //     console.log(result);
    // });

    // addParticipants(8088, 'username', ['firstBOT', 'secondBOT']);

    /*
     * Start Bot
     */
    // chatAgent.startBot({
    //     botName: 'secondBOT',
    //     threadId: 8088
    // }, (result) => {
    //     console.log('Start Bot result', result);
    // });

    /*
     * Stop Bot
     */
    // chatAgent.stopBot({
    //     botName: 'emmaBOT',
    //     threadId: 7730
    // }, (result) => {
    //     console.log('Stop Bot result', result);
    // });
});

/**
 * Listen to Error Messages
 */
chatAgent.on('error', function (error) {
    console.log('Error ', error);
    // console.log(error.lineNumber);
});

/**
 * Listen to Chat State Changes
 */
chatAgent.on('chatState', function (chatState) {
    // console.log(chatState);
});

/**
 * Listen to File Upload Events
 */
chatAgent.on('fileUploadEvents', function (event) {
    var type = event.type;
    console.log(event);
});

/**
 * Listen to Thread Events
 */
chatAgent.on('threadEvents', function (event) {
    var type = event.type;

    console.log(event);

    switch (type) {
        case 'THREAD_LAST_ACTIVITY_TIME':
            break;

        case 'THREAD_NEW':

            break;

        case 'THREAD_ADD_PARTICIPANTS':
            break;

        case 'THREAD_REMOVE_PARTICIPANTS':
            break;

        case 'THREAD_LEAVE_PARTICIPANT':
            break;

        case 'THREAD_REMOVED_FROM':
            break;

        case 'THREAD_RENAME':
            break;

        case 'THREAD_MUTE':
            break;

        case 'THREAD_UNMUTE':
            break;

        case 'THREAD_PIN':
            break;

        case 'THREAD_UNPIN':
            break;

        case 'THREAD_INFO_UPDATED':
            break;

        case 'THREAD_UNREAD_COUNT_UPDATED':
            break;

        default:
            break;
    }
});

/**
 * Listen to Message Events
 */
chatAgent.on('messageEvents', function (event) {
    var type = event.type,
        message = event.result.message;

    console.log(event);

    switch (type) {
        case 'MESSAGE_NEW':
            /**
             * Sending Message Seen to Sender after 5 secs
             */
            setTimeout(function () {
                chatAgent.seen({
                    messageId: message.id,
                    ownerId: message.ownerId
                });
            }, 5000);

            break;

        case 'MESSAGE_EDIT':
            break;

        case 'MESSAGE_DELIVERY':
            break;

        case 'MESSAGE_SEEN':
            // console.log("Some message seen has been ", event);
            break;

        default:
            break;
    }
});

/**
 * Listen to System Events
 */
chatAgent.on('systemEvents', function (event) {
    var type = event.type;
    console.log(event);

    switch (type) {
        case 'IS_TYPING':
            console.log(event.result.user.user + ' is typing in thread #' + event.result.thread);
            break;

        default:
            break;
    }
});

/**
 * Listen to User Events
 */
chatAgent.on('userEvents', function (event) {
    var type = event.type;
    console.log(event);

    switch (type) {
        case 'CHAT_PROFILE_UPDATED':
            break;

        default:
            break;
    }
});

/**
 * Listen to Disconnection Error Events
 */
chatAgent.on('disconnect', function (event) {
    console.log('Socket Disconnected');
    console.log(event);
});

/**
 * Local Functions
 */

function getUserInfo() {
    chatAgent.getUserInfo(function (userInfo) {
        console.log(userInfo);
    });
}

function getThreads(params) {
    var instantResult = chatAgent.getThreads(params, function (threadsResult) {
        if (!threadsResult.hasError) {
            console.log(threadsResult);
            console.log(threadsResult.result.threads);
        }
    });
    // console.log(instantResult);
}

function getThreadParticipants(threadId) {
    var getParticipantsParams = {
        count: 50,
        offset: 0,
        threadId: threadId
        // name: "gmail"
    };

    chatAgent.getThreadParticipants(getParticipantsParams, function (participantsResult) {
        if (!participantsResult.hasError) {
            var participantsCount = participantsResult.result.contentCount;
            var participants = participantsResult.result.participants;
            console.log(participantsResult);
            console.log(participants);
        }
    });
}

function addParticipants(threadId, type, participants) {
    switch (type) {
        case 'contact':
            chatAgent.addParticipants({
                threadId: threadId,
                contacts: participants
            }, function (result) {
                console.log(result);
            });
            break;

        case 'username':
            chatAgent.addParticipants({
                threadId: threadId,
                usernames: participants
            }, function (result) {
                console.log(result);
            });
            break;

        case 'coreuserid':
            chatAgent.addParticipants({
                threadId: threadId,
                coreuserids: participants
            }, function (result) {
                console.log(result);
            });
            break;
    }
}

function removeParticipants(threadId, participants) {
    chatAgent.removeParticipants({
        threadId: threadId,
        participantIds: participants
    }, function (result) {
        // console.log(result);
    });
}

function leaveThread(threadId) {
    chatAgent.leaveThread({
        threadId: threadId
    }, function (result) {
        console.log(result);
    });
}

function getContacts(params) {
    var getContactsParams = {
        count: params.count,
        offset: params.offset
    };

    if (params) {
        if (typeof params.query === 'string') {
            getContactsParams.query = params.query;
        }
    }
    chatAgent.getContacts(getContactsParams, function (contactsResult) {
        if (!contactsResult.hasError) {
            console.log(contactsResult.result);
            // contactsResult.result.contacts.forEach(function(v, k) {
            //     if (!v.hasUser) {
            //         console.log('delete me');
            //         chatAgent.removeContacts({
            //             id: v.id
            //         }, function(result) {
            //             console.log(result);
            //         });
            //     }
            // });
        }
    });
}

function getSingleMessage(threadId, messageId) {
    chatAgent.getHistory({
        offset: 0,
        threadId: threadId,
        id: messageId
    }, function (historyResult) {
        if (!historyResult.hasError) {
            console.log(historyResult);
            console.log(historyResult.result.history);
        }
    });
}

function getHistory(params) {
    var test = chatAgent.getHistory(params, function (historyResult) {
        if (!historyResult.hasError) {
            console.log('Cache:\t', historyResult.cache, '\n');
            // console.log(historyResult.result.history);
            var mim = [];
            for (var i = 0; i < historyResult.result.history.length; i++) {
                mim.push({
                    id: historyResult.result.history[i].id,
                    time: historyResult.result.history[i].time
                });
            }
            console.log(mim);
        }
    });
    // console.log(test);
}

function sendMessage(threadId, message, metadata) {
    sendChatParams = {
        threadId: threadId,
        textMessage: message,
        messageType: 'picture',
        systemMetadata: metadata
    };

    var sentMesageUniqueId = chatAgent.sendTextMessage(sendChatParams, {
        onSent: function (result) {
            console.log(result.uniqueId + ' \t has been Sent!');
        },
        onDeliver: function (result) {
            console.log(result.uniqueId + ' \t has been Delivered!');
        },
        onSeen: function (result) {
            console.log(result.uniqueId + ' \t has been Seen!');
        }
    });
}

function sendFileMessage(threadId, file, caption, metadata, userGroupHash) {
    var instantResult = chatAgent.sendFileMessage({
        threadId: threadId,
        file: file,
        content: caption,
        systemMetadata: metadata,
        userGroupHash: userGroupHash
    }, {
        onSent: function (result) {
            console.log(result.uniqueId + ' \t has been Sent!');
        },
        onDeliver: function (result) {
            console.log(result.uniqueId + ' \t has been Delivered!');
        },
        onSeen: function (result) {
            console.log(result.uniqueId + ' \t has been Seen!');
        }
    });

    // console.log("Should cancel file upload after 100ms. (uid = " + instantResult.content.file.uniqueId + ")")
    // setTimeout(() => {
    //   chatAgent.cancelFileUpload({
    //     uniqueId: instantResult.content.file.uniqueId
    //   }, function() {
    //     console.log("Upload has been Canceled!");
    //   });
    // }, 100);

    console.log('\nInstant Result For sendFileMessage:\n', instantResult);
}

function sendBotMessage(messageId, receiverId, message, metadata) {
    sendChatParams = {
        messageId: messageId,
        content: message,
        receiver: receiverId,
        metadata: metadata
    };

    var mim = chatAgent.sendBotMessage(sendChatParams, {
        onSent: function (result) {
            console.log(result.uniqueId + ' \t has been Sent!');
        },
        onDeliver: function (result) {
            console.log(result.uniqueId + ' \t has been Delivered!');
        }
    });

    console.log(mim);
}

function editMessage(messageId, newMessage, metadata) {
    editChatParams = {
        messageId: messageId,
        content: newMessage,
        systemMetadata: JSON.stringify(metadata)
    };

    chatAgent.editMessage(editChatParams, function (result) {
        console.log(result);
    });
}

function deleteMessage(messageId, deleteForAll) {
    if (typeof deleteForAll == 'undefined') {
        deleteForAll = false;
    }

    chatAgent.deleteMessage({
        messageId: messageId,
        deleteForAll: deleteForAll
    }, function (result) {
        console.log(result);
    });
}

function replyMessage(threadId, messageId, message) {
    replyChatParams = {
        threadId: threadId,
        repliedTo: messageId,
        content: message
    };

    chatAgent.replyMessage(replyChatParams, {
        onSent: function (result) {
            console.log(result.uniqueId + ' \t has been Sent! (Reply)');
        },
        onDeliver: function (result) {
            console.log(result.uniqueId + ' \t has been Delivered! (Reply)');
        },
        onSeen: function (result) {
            console.log(result.uniqueId + ' \t has been Seen! (Reply)');
        }
    });
}

function replyFileMessage(threadId, messageId, file, message, userGroupHash) {
    replyChatParams = {
        threadId: threadId,
        repliedTo: messageId,
        content: message,
        file: file,
        userGroupHash: userGroupHash,
        messageType: 'POD_SPACE_PICTURE'
    };

    chatAgent.replyFileMessage(replyChatParams, {
        onSent: function (result) {
            console.log(result.uniqueId + ' \t has been Sent! (Reply)');
        },
        onDeliver: function (result) {
            console.log(result.uniqueId + ' \t has been Delivered! (Reply)');
        },
        onSeen: function (result) {
            console.log(result.uniqueId + ' \t has been Seen! (Reply)');
        }
    });
}

function forwardMessage(destination, messageIds) {
    chatAgent.forwardMessage({
        subjectId: destination,
        content: JSON.stringify(messageIds)
    }, {
        onSent: function (result) {
            console.log(result.uniqueId + ' \t has been Sent! (FORWARD)');
        },
        onDeliver: function (result) {
            console.log(result.uniqueId + ' \t has been Delivered! (FORWARD)');
        },
        onSeen: function (result) {
            console.log(result.uniqueId + ' \t has been Seen! (FORWARD)');
        }
    });
}

function createThread(invitees, threadType) {
    if (typeof threadType == 'string') {
        threadTypeText = threadType;
    }
    else {
        threadTypeText = 'NORMAL';
    }

    createThreadParams = {
        title: 'Thread Title Sample',
        type: threadTypeText,
        invitees: [],
        image: 'https://core.pod.ir/nzh/image?imageId=333415&hashCode=16e37b412fe-0.9111035145050199',
        description: 'This is some Description.',
        metadata: {
            time: new Date()
        },
        // message: {
        //     uniqueId: "9766b140-24a9-49fb-a02e-6aff708645a6",
        //     text: "This is a new Mesage",
        //     metadata: {
        //         messageTime: new Date()
        //     },
        //     systemMetadata: {
        //         id: new Date().getTime()
        //     },
        //     type: 1
        //     // forwardedMessageIds: [19633, 19632, 19631]
        // }
    };

    if (Array.isArray(invitees)) {
        for (var i = 0; i < invitees.length; i++) {
            invitee = formatDataToMakeInvitee({
                id: invitees[i].id,
                type: invitees[i].type
            });
            if (invitee) {
                createThreadParams.invitees.push(invitee);
            }
        }
    }
    else {
        invitee = formatDataToMakeInvitee({
            id: invitees.id,
            type: invitees.type
        });
        if (invitee) {
            createThreadParams.invitees.push(invitee);
        }
    }

    chatAgent.createThread(createThreadParams, function (createThreadResult) {
        console.log(createThreadResult);
    });
}

function createThreadWithFile(file, invitees, threadType) {
    if (typeof threadType == 'string') {
        threadTypeText = threadType;
    }
    else {
        threadTypeText = 'NORMAL';
    }

    createThreadParams = {
        threadId: 0,
        title: 'Thread Title Sample',
        type: threadTypeText,
        invitees: [],
        file: file,
        caption: 'Create thread with file message',
        image: 'https://core.pod.ir/nzh/image?imageId=333415&hashCode=16e37b412fe-0.9111035145050199',
        description: 'This is some Description.'
    };

    if (Array.isArray(invitees)) {
        for (var i = 0; i < invitees.length; i++) {
            invitee = formatDataToMakeInvitee({
                id: invitees[i].id,
                type: invitees[i].type
            });
            if (invitee) {
                createThreadParams.invitees.push(invitee);
            }
        }
    }
    else {
        invitee = formatDataToMakeInvitee({
            id: invitees.id,
            type: invitees.type
        });
        if (invitee) {
            createThreadParams.invitees.push(invitee);
        }
    }

    chatAgent.createThreadWithFile(createThreadParams, function (createThreadResult) {
        console.log(createThreadResult);
    });
}

function renameThread(threadId, newName) {
    renameThreadParams = {
        title: newName,
        threadId: threadId
    };

    chatAgent.renameThread(renameThreadParams, function (renameThreadResult) {
        console.log(renameThreadResult);
    });
}

function muteThread(threadId) {
    var data = {
        subjectId: threadId
    };
    chatAgent.muteThread(data, function (result) {
        if (!result.hasError) {
            console.log('Threaded has been successfully muted!');
        }
        console.log(result);
    });
}

function getBlockedList() {
    var data = {
        count: 50,
        offset: 0
    };
    chatAgent.getBlockedList(data, function (result) {
        if (!result.hasError) {
            console.log(result.result.blockedUsers);
        }
    });
}

function unMuteThread(threadId) {
    var data = {
        subjectId: threadId
    };
    chatAgent.unMuteThread(data, function (result) {
        if (!result.hasError) {
            console.log('Threaded has been successfully unMuted!');
        }
        console.log(result);
    });
}

function formatDataToMakeInvitee(messageContent) {
    var inviteeData = {
        id: messageContent.id,
        idType: messageContent.type
    };

    return inviteeData;
}

function uploadImage(image, xC, yC, hC, wC) {
    chatAgent.uploadImage({
        image: image,
        xC: xC,
        yC: yC,
        hC: hC,
        wC: wC
    }, function (result) {
        console.log(result);
        if (!result.hasError) {
            var image = result.result;
            console.log('Image has been Successfully Uploaded => \n\n', image);
        }
    });
}

function getImage(imageId, hashCode) {
    chatAgent.getImage({
        imageId: imageId,
        hashCode: hashCode
    }, function (result) {
        if (!result.hasError) {
            console.log('Image has been successfully received => \n', result.result);
        }
    });
}

function uploadFile(file) {
    chatAgent.uploadFile({
        file: file
    }, function (result) {
        console.log(result);
        if (!result.hasError) {
            var file = result.result;
            console.log('File has been Successfully Uploaded => \n', file);
        }
    });
}

function getFile(fileId, hashCode, downloadable) {
    chatAgent.getFile({
        fileId: fileId,
        hashCode: hashCode,
        downloadable: downloadable
    }, function (result) {
        if (!result.hasError) {
            console.log('File has been successfully received => \n', result.result);
        }
    });
}

function pinThread(threadId) {
    chatAgent.pinThread({
        subjectId: threadId
    }, function (result) {
        if (!result.hasError) {
            console.log('Thread has been successfully pinned to top!');
        }
        console.log(result);
    });
}

function unPinThread(threadId) {
    chatAgent.unPinThread({
        subjectId: threadId
    }, function (result) {
        if (!result.hasError) {
            console.log('Thread has been successfully unpinned from top!');
        }
        console.log(result);
    });
}