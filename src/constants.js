module.exports = {
  drake: {
    speed: 6,
    frameRate: 5,
    width: 100,
    height: 120,
    scale: 1
  },
  map: {
    tileSize: 32,
    borderAllowance: 20,
    fontPadding: 6,
    fontSize: 16,
    streets: [
      { text: 'DANFORTH AVE', location: [2, 1] },
      { text: 'GERRARD ST E', location: [8, 12] },
      { text: 'DUNDAS ST E', location: [14, 15] },
      { text: 'QUEEN ST E', location: [20, 18] },
      { text: 'LAKE SHORE BLVD E', location: [6, 23] },
      { text: 'DON VALLEY PARKWAY', location: [2, 4], vertical: true },
      { text: 'BROADVIEW AVE', location: [5, 10], vertical: true },
      { text: 'DEGRASSI ST', location: [8, 15], y: 4, vertical: true },
      { text: 'CARLAW AVE', location: [11, 16], vertical: true },
      { text: 'PAPE AVE', location: [13, 3], vertical: true },
      { text: 'JONES AVE', location: [16, 10], vertical: true },
      { text: 'GREENWOOD AVE', location: [21, 4], vertical: true },
      { text: 'COXWELL AVE', location: [26, 6], vertical: true },
      { text: 'WOODBINE AVE', location: [29, 10], vertical: true }
    ]
  }
}