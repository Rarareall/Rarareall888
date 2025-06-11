'use client';
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export default function CraftedByRara() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-100 p-6 text-gray-800">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold tracking-tight">Crafted by Rara</h1>
        <p className="text-lg mt-2">أصمم لك سيرتك الذاتية وأجهزك للمقابلة بثقة 💼✨</p>
      </header>

      {/* CV Service Section */}
      <Card className="max-w-2xl mx-auto mb-8">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-2">✍️ تصميم سيرة ذاتية</h2>
          <p className="mb-4">سيرة ذاتية أنيقة واحترافية خلال 3 أيام فقط بـ150 ريال.</p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>تصميم وتنسيق مخصص حسب مجالك</li>
            <li>تسليم PDF جاهز</li>
            <li>تعديل واحد مجاني بعد التسليم</li>
          </ul>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdDfD-sLPcgGULJgTV1TryFdckyx235yBwZa8qhIm9IYU53GA/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-pink-500 hover:bg-pink-600 text-white">اطلب الآن</Button>
          </a>
        </CardContent>
      </Card>

      {/* Interview Coaching Section */}
      <Card className="max-w-2xl mx-auto mb-8">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-2">🎤 استشارة ما قبل المقابلة</h2>
          <p className="mb-4">جلسة فردية لمدة 45 دقيقة بـ200 ريال، عبر Zoom أو WhatsApp حسب رغبتك.</p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>نراجع إجاباتك ونعزز ثقتك</li>
            <li>نحاكي المقابلة بأسئلة فعلية</li>
            <li>جدولة مرنة بين الأحد والأربعاء</li>
          </ul>
          <a
            href="https://calendly.com/razanalsaleemrazan/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-pink-500 hover:bg-pink-600 text-white">احجزي الآن</Button>
          </a>
        </CardContent>
      </Card>

      {/* Contact Section */}
      <div className="text-center mt-10">
        <h3 className="text-xl font-semibold mb-2">📩 تواصلي معي</h3>
        <p>craftedbyrara@gmail.com</p>
        <p>Instagram: <a className="text-pink-600 underline" href="https://instagram.com/craftedbyrara" target="_blank" rel="noopener noreferrer">@craftedbyrara</a></p>
        <p className="mt-2">💬 متاحة دائمًا للرد على استفساراتك!</p>
      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 mt-10">
        <p>&copy; {new Date().getFullYear()} Crafted by Rara. جميع الحقوق محفوظة.</p>
      </footer>
    </div>
  );
}
