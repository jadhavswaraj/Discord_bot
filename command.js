const {REST,Routes}=require("discord.js");

const commands=[
    {
        name:"create",
        description:"Create a new short URL",
        
    },
];

const rest=new REST({version:"10"}).setToken("our token should mention");

(async()=>{

try{
    console.log("Started refreshing application (/) commands");
    await rest.put(Routes.applicationCommands("our id should mention"),{body:commands});
    console.log("Successfully reloaded application (/) commands");

}catch(err){
    console.error("Error refreshing application (/) commands",err);
}
})();