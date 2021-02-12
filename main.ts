let tileDisplay: Kitronik_Zip_Tile.ZIPTileDisplay = null
input.onButtonPressed(Button.B, function () {
    tileDisplay.setBrightness(45)
    tileDisplay.showRainbow(1, 360)
    tileDisplay.show()
    tileDisplay.rotate(15)
})
basic.forever(function () {
    tileDisplay = Kitronik_Zip_Tile.createZIPTileDisplay(1, 1, Kitronik_Zip_Tile.UBitLocations.Hidden)
})
