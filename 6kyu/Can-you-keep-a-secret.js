const createSecretHolder = (secret) => {
  let temp = secret;
  return {
    getSecret: function() {
      return temp;
    },
    setSecret: function(newSecret) {
      temp = newSecret;
    }
  }
}

// obj = createSecretHolder(5)
// obj.getSecret() // returns 5
// obj.setSecret(2)
// obj.getSecret() // returns 2
