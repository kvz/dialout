const AutoLaunch = require('auto-launch')

const minecraftAutoLauncher = new AutoLaunch({
  name: 'Minecraft',
  path: '/Applications/Minecraft.app',
})

minecraftAutoLauncher.enable()

// minecraftAutoLauncher.disable();

minecraftAutoLauncher.isEnabled()
.then(isEnabled => {
  if (isEnabled) {
    return
  }
  minecraftAutoLauncher.enable()
})
.catch(err => {
  console.log(err)
})
