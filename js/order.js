var firebaseConfig = {
  apiKey: "xxx",
  authDomain: "xxx",
  projectId: "xxx",
  storageBucket: "xxx",
  messagingSenderId: "xxx",
  appId: "xxx"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
let curRef = db.collection("current").doc("number");

new Vue({
  el: '#app',
  data: {
    currentVal: null,
    orderData: null,
    formData: {
      email: '',
      password: ''
    },
    status: {
      login: false,
    }
  },
  methods: {
    getCurrentData() {
      const vm = this;
      curRef.onSnapshot(function(doc) {
        if (doc.exists) {
          vm.currentVal = doc.data().value;
          console.log("Document data:", doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
    },
    getOrderData() {
      const vm = this;
      let arr = {}
      db.collection("list")
      .onSnapshot(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          arr[doc.id] = doc.data()
        });
        vm.orderData = arr;
      })
    },
    login() {
      const vm = this;
      firebase.auth().signInWithEmailAndPassword(vm.formData.email, vm.formData.password)
      .then((user) => {
        alert("登入成功");
        vm.status.login = true;
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
    },
    loginCheck() {
      const vm = this;
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          vm.status.login = true;
        } else {
          vm.status.login = false;
        }
      });
    },
    logout() {
      const vm = this;
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
        vm.status.login = false;
      }).catch(function(error) {
        // An error happened.
        console.log(error)
      });
    },
    cardSendClick(id, state) {
      // order
      db.collection("list").doc(id.toString())
      .update({
        cardSend: state
      })
      .then(() => { console.log("OK ") })
      .catch((error) => { console.error("Error: ", error) });
    },
    foodDoneClick(id, state) {
      // current
      curRef.set({ value: id })
      .then(() => { console.log("OK ") })
      .catch((error) => { console.error("Error: ", error) });

      // order
      db.collection("list").doc(id.toString())
      .update({
        foodDone: state
      })
      .then(() => { console.log("OK ") })
      .catch((error) => { console.error("Error: ", error) });
    },
    allDoneClick(id) {
      // order
      db.collection("list").doc(id.toString())
      .update({
        cardSend: false,
        foodDone: false
      })
      .then(() => { console.log("OK ") })
      .catch((error) => { console.error("Error: ", error) });
    },
  },
  created() {
    this.getCurrentData();
    this.getOrderData();
    this.loginCheck();
  }
})

