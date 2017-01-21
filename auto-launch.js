var AutoLaunch = require('auto-launch');

var minecraftAutoLauncher = new AutoLaunch({
    name: 'Minecraft',
    path: '/Applications/Minecraft.app',
});

minecraftAutoLauncher.enable();

//minecraftAutoLauncher.disable();


minecraftAutoLauncher.isEnabled()
.then(function(isEnabled){
    if(isEnabled){
        return;
    }
    minecraftAutoLauncher.enable();
})
.catch(function(err){
    // handle error
});
