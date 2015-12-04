var slackbot = require('./lib/bot');

var config = {

    showIssueDetails: true,
    issueDetailsToShow: {'fields.summary':1 , 'fields.assignee' : 1, 'fields.creator' : 1, 'fields.description': 0},
    showDetailsByDefault: true,//if true, you don't need the '+' to get details
    bot_name: "jira",//Provide the name to post under
    token: 'xoxp-6516644678-6516752178-15769453446-28932b214d', // https://api.slack.com/web
    jira_urls: {
        // DEFAULT NODE IS REQUIRED.
        "DEFAULT": {
            url: "https://jira.bercut.com/browse/",
            jira: {
                user: 'iliyn-a', // be sure to use the username, not the user email
                password: '2wsx3edC',
                host: 'jira.bercut.com',
                protocol: 'http',
                port: 80,
                version: '2',
                verbose: true,
                strictSSL: true
            }
        }
    },
    search_cmd: "search",
    //Since search results can be verbose, you may not want to muddy the channel
    search_output_chan: "C02U1L9KZ",//if the value is "this", then the current channel will be used, else the name of a channel
    projects: ["WS", "WHT", "WEBD", "YOUR", "PROJECT", "NAMES", "GRANT", "SOLR"],
    post: true,
    verbose: true,
    custom_texts: {
        messagePrefix: "Hey, thought this might help: " //message you might like to prefix to JiraBot's post
    },
    emoji: ":jira:", // be sure to upload your custom emoji in slack
    link_separator: ", ",// use \n if you want new lines
    error_channel: '' //the id of the channel to send low level log errors.  If not defined, will use the current channel
};

//DO NOT EDIT BELOW HERE
var slackbot = new slackbot.Bot(config);
slackbot.run();
