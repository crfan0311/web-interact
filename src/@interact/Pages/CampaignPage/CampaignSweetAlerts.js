import useSwalWrapper from "@jumbo/vendors/sweetalert2/hooks";

const buyGiveawayAlert = () => {
  const Swal = useSwalWrapper();
  Swal.fire({
    title: "Skill-testing question",
    text: "Before you make this purchase, you must correctly answer the math question below:",
    icon: "warning",
    html: (
      <div>
        <p>300+100+20 = ?</p>
        <input id="answer" type={"number"} />
      </div>
    ),
    showCancelButton: true,
    confirmButtonText: "Confirm",
    cancelButtonText: "Cancel",
    reverseButtons: true,
    preConfirm: () => {
      const answer = Swal.getPopup().querySelector("#answer").value;
      if (answer != 420) {
        Swal.showValidationMessage(`Please try again.`);
      }
      return { answer: answer };
    },
  }).then((result) => {
    if (result.value.answer == 420) {
      Swal.fire(
        "Correct!",
        "You'll now be taken to the payment page.",
        "success"
      );
    } else {
      Swal.fire(
        "Incorrect.",
        "We were expecting a different answer... try again!",
        "error"
      );
    }
  });
};
const freeGiveawayAlert = () => {
  const Swal = useSwalWrapper();
  Swal.fire({
    title: "Claim free entry?",
    text: "Would you like to claim this free giveaway entry?",
    showCancelButton: true,
    confirmButtonText: "Yes, Claim!",
    cancelButtonText: "Cancel",
    reverseButtons: true,
  }).then((result) => {
    if (result.value) {
      Swal.fire(
        "Claimed!",
        "You've claimed a free entry for this giveaway. Good luck!",
        "success"
      );
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      // close alert
    }
  });
};

export { buyGiveawayAlert, freeGiveawayAlert };
