export const SeoContent = () => {
  return (
    <section className="bg-white rounded-2xl border border-gray-100 p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        올바른 <span className="gradient-text">경조사 예절</span> 가이드
      </h2>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-600">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">경조사란 무엇인가요?</h3>
          <p>
            경조사(慶弔事)란 기쁜 일(경사)과 슬픈 일(조사)을 아울러 이르는 말입니다.
            결혼, 출산, 승진, 개업 등의 축하할 일과 사망, 상실 등의 애도해야 할 일을 통틀어
            경조사라고 합니다. 한국 사회에서 경조사는 인간관계를 유지하고 발전시키는 중요한
            사회적 의례로, 적절한 예절을 갖추는 것이 매우 중요합니다.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">경조사 문구 작성의 기본 원칙</h3>
          <p>
            경조사 문구를 작성할 때는 몇 가지 원칙을 지켜야 합니다. 먼저, 상대방과의 관계를
            고려하여 적절한 경어를 사용해야 합니다. 친한 친구에게는 편한 말투로, 상사나
            어른에게는 격식 있는 표현을 사용하는 것이 좋습니다. 또한 진심을 담아 작성하되,
            지나치게 길거나 화려한 표현은 피하는 것이 바람직합니다. 특히 조의 문구는 간결하고
            정중하게 작성하는 것이 예의입니다.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">결혼 축하 예절</h3>
          <p>
            결혼식에 참석할 때는 청첩장 수령 후 가능한 빨리 참석 여부를 알리는 것이 예의입니다.
            축의금은 보통 홀수로 내는 것이 관례이며, 지역과 관계에 따라 금액이 다를 수 있습니다.
            결혼 축하 메시지는 두 사람의 행복을 기원하는 내용으로, 지나친 농담이나 과거 연애
            이야기는 피하는 것이 좋습니다. 화환이나 선물을 보낼 경우에는 카드에 간단한 축하
            메시지를 적어 함께 보내면 더욱 정성이 느껴집니다.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">조의 예절</h3>
          <p>
            장례식장 방문 시에는 검은색이나 어두운 색상의 단정한 복장을 갖추는 것이 기본입니다.
            부의금 봉투에는 '부의(賻儀)' 또는 '조의(弔意)'라고 쓰고, 이름을 적습니다.
            유족을 만났을 때는 "삼가 조의를 표합니다" 또는 "고인의 명복을 빕니다"와 같이
            간결하게 인사합니다. 지나친 위로의 말보다는 조용히 곁에 있어 주는 것이 더 큰
            위로가 됩니다. 장례식장에서는 큰 소리로 웃거나 떠드는 행동을 삼가야 합니다.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">개업 및 승진 축하</h3>
          <p>
            개업 축하 화환이나 난을 보낼 때는 축하 메시지와 함께 보내는 사람의 이름을 명확히
            적어야 합니다. 승진 축하는 회사 분위기에 따라 적절한 방법으로 전달하면 됩니다.
            공개적으로 축하해도 되는 분위기라면 동료들과 함께 축하 메시지를 전하고, 그렇지
            않다면 개인적으로 문자나 카톡으로 축하 인사를 전하는 것이 좋습니다.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">디지털 시대의 경조사 예절</h3>
          <p>
            현대에는 카카오톡, 문자 메시지 등을 통해 경조사 인사를 전하는 경우가 많습니다.
            디지털 메시지도 정성을 담아 작성하면 충분히 마음이 전달됩니다. 다만, 중요한
            경조사에는 가능하면 직접 방문하거나 전화로 인사를 전하는 것이 더욱 예의 바른
            행동입니다. 온라인으로 축의금이나 부의금을 보낼 때는 관계와 상황에 맞는 적절한
            금액을 보내고, 메시지도 함께 전달하는 것이 좋습니다.
          </p>
        </div>
      </div>

      {/* 카테고리별 요약 */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: '💒', label: '결혼', count: 10 },
          { icon: '🕯️', label: '조의', count: 10 },
          { icon: '🏪', label: '개업', count: 8 },
          { icon: '🎖️', label: '승진', count: 6 },
          { icon: '🎂', label: '생일', count: 7 },
          { icon: '🏠', label: '이사', count: 5 },
          { icon: '👶', label: '출산', count: 6 },
          { icon: '🎓', label: '졸업', count: 6 },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-orange-50 rounded-xl p-4 text-center"
          >
            <div className="text-2xl mb-2">{item.icon}</div>
            <div className="text-gray-800 font-medium">{item.label}</div>
            <div className="text-gray-500 text-sm">{item.count}개 문구</div>
          </div>
        ))}
      </div>
    </section>
  );
};
