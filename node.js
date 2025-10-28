module.exports = function (RED) {
  function TaiponrockNode(config) {
    RED.nodes.createNode(this, config);
    var node = this;

    node.on('input', function (msg) {
      // Instead of converting to lowercase, always return your nickname
      msg.payload = "Taiponrock";
      node.send(msg);
    });
  }

  // Register node under its new name
  RED.nodes.registerType("taiponrock", TaiponrockNode);
};
