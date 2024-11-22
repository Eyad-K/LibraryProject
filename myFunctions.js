$(document).ready(function () {
    // عند الضغط على زر "متابعة"
    $("#continue").click(function () {
        const selectedBook = $("input[name='book']:checked").val();
        if (selectedBook) {
            alert(`تم اختيار الكتاب: ${selectedBook}`);
            $("#form-section").show();
            $("html, body").animate({ scrollTop: $("#form-section").offset().top }, "slow");
        } else {
            alert("يرجى اختيار كتاب قبل المتابعة.");
        }
    });

    // عند الضغط على زر "إظهار التفاصيل"
    $(".show-details").click(function () {
        const bookTitle = $(this).closest("tr").find("td:nth-child(4)").text();
        alert(`تفاصيل الكتاب: ${bookTitle}`);
    });

    // عند إرسال النموذج
    $("#order-form").submit(function (e) {
        e.preventDefault();
        const fullname = $("#fullname").val();
        const email = $("#email").val();
        alert(`شكرًا لك يا ${fullname}! سيتم التواصل معك عبر البريد الإلكتروني: ${email}.`);
        this.reset();
        $("#form-section").hide();
    });
});
