// ข้อมูลเมนูอาหาร
        const meals = [
            {
                id: 1,
                name: "ข้าวกล้องผัดผักรวม",
                disease: ["diabetes", "heart", "cholesterol"],
                calories: 280,
                carbs: 45,
                protein: 8,
                fat: 6,
                description: "ข้าวกล้องมีใยอาหารสูง ช่วยควบคุมระดับน้ำตาลในเลือด",
                benefits: ["ควบคุมน้ำตาลในเลือด", "ลดคอเลสเตอรอล", "มีใยอาหารสูง"],
                ingredients: ["ข้าวกล้อง", "ผักคะน้า", "แครอท", "น้ำมันมะกอก"],
                image: "🍚"
            },
            {
                id: 2,
                name: "ต้มจืดเต้าหู้หมูสับ",
                disease: ["hypertension", "kidney"],
                calories: 150,
                carbs: 8,
                protein: 15,
                fat: 5,
                description: "ซุปใสไม่เค็ม เหมาะสำหรับผู้ป่วยความดันสูงและโรคไต",
                benefits: ["โซเดียมต่ำ", "โปรตีนคุณภาพสูง", "ย่อยง่าย"],
                ingredients: ["เต้าหู้นุ่ม", "หมูสับ", "ผักกาดขาว", "ต้นหอม"],
                image: "🍲"
            },
            {
                id: 3,
                name: "สลัดผักผลไม้",
                disease: ["diabetes", "cholesterol", "hypertension"],
                calories: 120,
                carbs: 25,
                protein: 3,
                fat: 2,
                description: "ผักและผลไม้สดใส อุดมไปด้วยวิตามินและแร่ธาตุ",
                benefits: ["วิตามินสูง", "ไฟเบอร์สูง", "แคลอรี่ต่ำ"],
                ingredients: ["ผักกาดหอม", "มะเขือเทศ", "แตงกวา", "แอปเปิ้ล"],
                image: "🥗"
            },
            {
                id: 4,
                name: "ปลานึ่งมะนาว",
                disease: ["heart", "kidney", "hypertension"],
                calories: 200,
                carbs: 2,
                protein: 35,
                fat: 4,
                description: "ปลาสดนึ่งใส ไม่ใส่เกลือมาก อุดมไปด้วยโอเมก้า 3",
                benefits: ["โอเมก้า 3 สูง", "โซเดียมต่ำ", "โปรตีนสูง"],
                ingredients: ["ปลากะพง", "มะนาว", "พริกชี้ฟ้า", "กระเทียม"],
                image: "🐟"
            },
            {
                id: 5,
                name: "แกงจืดฟักเมล็ดมะตูม",
                disease: ["diabetes", "kidney"],
                calories: 180,
                carbs: 20,
                protein: 10,
                fat: 6,
                description: "แกงจืดรสชาติหวานธรรมชาติ ไม่ใส่น้ำตาล",
                benefits: ["น้ำตาลธรรมชาติ", "โซเดียมต่ำ", "ใยอาหารสูง"],
                ingredients: ["ฟักทอง", "เมล็ดมะตูม", "หมูสับ", "ผักชี"],
                image: "🥣"
            },
            {
                id: 6,
                name: "ผัดผักบุ้งไฟแดง (ปรับสูตร)",
                disease: ["cholesterol", "hypertension"],
                calories: 160,
                carbs: 12,
                protein: 6,
                fat: 8,
                description: "ผัดด้วยน้ำมันน้อย ลดเกลือ เพิ่มรสชาติด้วยสมุนไพร",
                benefits: ["เหล็กสูง", "วิตามิน A", "ไฟเบอร์สูง"],
                ingredients: ["ผักบุ้ง", "พริกแกง", "กระเทียม", "น้ำมันมะกอก"],
                image: "🥬"
            },
            {
    id: 7,
    name: "สลัดผักโขมไก่ย่าง",
    disease: ["anemia", "obesity"],
    calories: 220,
    carbs: 8,
    protein: 25,
    fat: 9,
    description: "อุดมไปด้วยเหล็ก วิตามินบี12 เหมาะสำหรับผู้ป่วยโลหิตจาง",
    benefits: ["เหล็กสูง", "โปรตีนสูง", "แคลอรี่ต่ำ"],
    ingredients: ["ผักโขม", "ไก่ย่าง", "มะเขือเทศ", "ถั่วลิสง"],
    image: "🥗"
},
{
    id: 8,  
    name: "ต้มจืดมะระยัดไส้",
    disease: ["diabetes", "liver"],
    calories: 180,
    carbs: 12,
    protein: 18,
    fat: 6,
    description: "มะระช่วยล้างพิษตับ ลดน้ำตาลในเลือด",
    benefits: ["ล้างพิษตับ", "ลดน้ำตาล", "วิตามินซี"],
    ingredients: ["มะระ", "หมูสับ", "เต้าหู้", "ผักชี"],
    image: "🥒"
},
{
    id: 9,
    name: "ข้าวโอ๊ตผลไม้",
    disease: ["obesity", "cholesterol", "diabetes"],
    calories: 250,
    carbs: 40,
    protein: 8,
    fat: 5,
    description: "ใยอาหารสูง ช่วยลดน้ำหนัก ควบคุมคอเลสเตอรอล",
    benefits: ["ใยอาหารสูง", "ลดน้ำหนัก", "อิ่มนาน"],
    ingredients: ["ข้าวโอ๊ต", "กล้วย", "เบอร์รี่", "นมอัลมอนด์"],
    image: "🥣"
},
{
    id: 10,
    name: "แกงจืดใบแมงลัก",
    disease: ["gastric", "anemia"],
    calories: 120,
    carbs: 15,
    protein: 8,
    fat: 3,
    description: "อ่อนโยนต่อกระเพาะอาหาร อุดมไปด้วยเหล็ก",
    benefits: ["ใจกระเพาะ", "เหล็กสูง", "ย่อยง่าย"],
    ingredients: ["ใบแมงลัก", "หมูสับ", "เต้าหู้", "ไข่ไก่"],
    image: "🍲"
}

        ];

        
const weeklyPlans = {
    diabetes: [
        {
            day: "วันจันทร์",
            meals: {
                breakfast: "โจ๊กธัญพืช",
                lunch: "ข้าวกล้องผัดผักรวม",
                dinner: "ปลานึ่งมะนาว"
            }
        },
        {
            day: "วันอังคาร",
            meals: {
                breakfast: "ขนมปังโฮลวีท + นมอัลมอนด์",
                lunch: "สลัดผักผลไม้",
                dinner: "ต้มจืดมะระยัดไส้"
            }
        }
    ],
    kidney: [
        {
            day: "วันจันทร์",
            meals: {
                breakfast: "ข้าวต้มปลา",
                lunch: "ต้มจืดเต้าหู้หมูสับ",
                dinner: "ปลานึ่งซีอิ๊ว + ข้าวกล้อง"
            }
        },
        {
            day: "วันอังคาร",
            meals: {
                breakfast: "ไข่ต้ม + ขนมปังโฮลวีท",
                lunch: "แกงจืดฟักเมล็ดมะตูม",
                dinner: "สลัดผักไก่ย่าง"
            }
        }
    ],
    heart: [
        {
            day: "วันจันทร์",
            meals: {
                breakfast: "ข้าวโอ๊ตผลไม้",
                lunch: "ปลานึ่งมะนาว",
                dinner: "สลัดผักผลไม้"
            }
        },
        {
            day: "วันอังคาร",
            meals: {
                breakfast: "ผลไม้รวม + นมถั่วเหลือง",
                lunch: "แกงจืดฟัก",
                dinner: "ข้าวกล้อง + ผัดผักบุ้ง"
            }
        }
    ],
    cholesterol: [
        {
            day: "วันจันทร์",
            meals: {
                breakfast: "สมูทตี้ผักผลไม้",
                lunch: "ข้าวโอ๊ตผลไม้",
                dinner: "ปลาย่าง + สลัดผัก"
            }
        },
        {
            day: "วันอังคาร",
            meals: {
                breakfast: "โจ๊กข้าวกล้อง",
                lunch: "ผัดผักบุ้งไฟแดง (ปรับสูตร)",
                dinner: "สลัดผักโขมไก่ย่าง"
            }
        }
    ],
    obesity: [
        {
            day: "วันจันทร์",
            meals: {
                breakfast: "ฟรุตโบว์ล + นัท",
                lunch: "ข้าวกล้อง + สลัดไก่",
                dinner: "ข้าวโอ๊ตผลไม้"
            }
        },
        {
            day: "วันอังคาร",
            meals: {
                breakfast: "สมูทตี้ผักผลไม้",
                lunch: "ต้มจืดเต้าหู้หมูสับ",
                dinner: "ปลานึ่งมะนาว"
            }
        }
    ],
    anemia: [
        {
            day: "วันจันทร์",
            meals: {
                breakfast: "โจ๊กตับหมู + ไข่ต้ม",
                lunch: "ข้าวผัดไก่ + ผักโขม",
                dinner: "แกงจืดใบแมงลัก"
            }
        },
        {
            day: "วันอังคาร",
            meals: {
                breakfast: "ซีเรียลธัญพืช + นม",
                lunch: "สลัดผักโขมไก่ย่าง",
                dinner: "ข้าวกล้อง + ต้มจืดเต้าหู้"
            }
        }
    ]
};


// ข้อมูลแผนการกิน 7 วัน (เดิม)
        const weeklyPlan = [
            {
                day: "วันจันทร์",
                meals: {
                    breakfast: "โจ๊กไข่ไก่ใส่ผัก",
                    lunch: "ข้าวกล้องผัดผักรวม",
                    dinner: "ปลานึ่งมะนาว + ข้าวกล้อง"
                }
            },
            {
                day: "วันอังคาร", 
                meals: {
                    breakfast: "ขนมปังโฮลวีท + นมถั่วเหลือง",
                    lunch: "ต้มจืดเต้าหู้หมูสับ + ข้าวหอมมะลิ",
                    dinner: "สลัดผักผลไม้ + ไก่ย่าง"
                }
            },
            {
                day: "วันพุธ",
                meals: {
                    breakfast: "ผลไม้รวม + โยเกิร์ตธรรมชาติ",
                    lunch: "แกงจืดฟักเมล็ดมะตูม + ข้าวกล้อง",
                    dinner: "ผัดผักบุ้งไฟแดง (ปรับสูตร) + ข้าวกล้อง"
                }
            },
            {
                day: "วันพฤหัสบดี",
                meals: {
                    breakfast: "ข้าวต้มหมู + ผักใส",
                    lunch: "ส้มตำไทย (ลดน้ำปลา) + ไก่ย่าง",
                    dinner: "ปลานึ่งซีอิ๊ว + ผักต้ม"
                }
            },
            {
                day: "วันศุกร์",
                meals: {
                    breakfast: "สมูทตี้ผักผลไม้",
                    lunch: "ข้าวผัดไข่ไก่ (น้ำมันน้อย)",
                    dinner: "แกงเลียงผักรวม + ข้าวกล้อง"
                }
            },
            {
                day: "วันเสาร์",
                meals: {
                    breakfast: "โจ๊กปลา + ไข่ต้ม",
                    lunch: "ลาบหมู (ปรับสูตร) + ผักสด",
                    dinner: "ต้มยำปลา (น้ำใส) + ข้าวกล้อง"
                }
            },
            {
                day: "วันอาทิตย์",
                meals: {
                    breakfast: "ฟรุตโบว์ล + นัท",
                    lunch: "ข้าวราดแกงผักรวม",
                    dinner: "ปลาทับทิมนึ่งมะนาว + สลัดผัก"
                }
            }
        ];

        // ฟังก์ชันสร้างการ์ดเมนูอาหาร
        function createMealCard(meal) {
            const tagsHTML = meal.benefits.map(benefit => 
                `<span class="tag">${benefit}</span>`
            ).join('');

            return `
                <div class="card meal-card" data-disease="${meal.disease.join(' ')}">
                    <div class="card-header">
                        <div style="font-size: 3rem;">${meal.image}</div>
                        <h3>${meal.name}</h3>
                    </div>
                    <div class="card-body">
                        <div class="nutrition-info">
                            <div class="nutrition-item">
                                <div class="nutrition-value">${meal.calories}</div>
                                <div class="nutrition-label">แคลอรี่</div>
                            </div>
                            <div class="nutrition-item">
                                <div class="nutrition-value">${meal.protein}g</div>
                                <div class="nutrition-label">โปรตีน</div>
                            </div>
                            <div class="nutrition-item">
                                <div class="nutrition-value">${meal.carbs}g</div>
                                <div class="nutrition-label">คาร์โบ</div>
                            </div>
                            <div class="nutrition-item">
                                <div class="nutrition-value">${meal.fat}g</div>
                                <div class="nutrition-label">ไขมัน</div>
                            </div>
                        </div>
                        <div class="tags">
                            ${tagsHTML}
                        </div>
                        <p><strong>ส่วนผสม:</strong> ${meal.ingredients.join(', ')}</p>
                        <p style="margin-top: 1rem;"><strong>ประโยชน์:</strong> ${meal.description}</p>
                    </div>
                </div>
            `;
        }

        // ฟังก์ชันสร้างการ์ดวัน
        function createDayCard(dayPlan) {
            return `
                <div class="day-card">
                    <div class="day-title">${dayPlan.day}</div>
                    <div class="meals">
                        <div class="meal">
                            <div class="meal-type">🌅 เช้า:</div>
                            <div>${dayPlan.meals.breakfast}</div>
                        </div>
                        <div class="meal">
                            <div class="meal-type">☀️ กลางวัน:</div>
                            <div>${dayPlan.meals.lunch}</div>
                        </div>
                        <div class="meal">
                            <div class="meal-type">🌙 เย็น:</div>
                            <div>${dayPlan.meals.dinner}</div>
                        </div>
                    </div>
                </div>
            `;
        }

        // ฟังก์ชันแสดงเมนูอาหาร
        function displayMeals(mealsToShow = meals) {
            const container = document.getElementById('mealsContainer');
            container.innerHTML = mealsToShow.map(createMealCard).join('');
        }

        // ฟังก์ชันแสดงแผนการกิน 7 วัน
        function displayWeeklyPlan() {
            const container = document.getElementById('weekContainer');
            container.innerHTML = weeklyPlan.map(createDayCard).join('');
        }

        // ฟังก์ชันค้นหาเมนู
        function searchMeals() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            const filteredMeals = meals.filter(meal => 
                meal.name.toLowerCase().includes(searchTerm) ||
                meal.description.toLowerCase().includes(searchTerm) ||
                meal.benefits.some(benefit => benefit.toLowerCase().includes(searchTerm)) ||
                meal.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm))
            );
            displayMeals(filteredMeals);
        }

        // ฟังก์ชันกรองตามโรค
        function filterByDisease(disease) {
            // อัพเดทปุ่มที่ active
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');

            if (disease === 'all') {
                displayMeals(meals);
            } else {
                const filteredMeals = meals.filter(meal => 
                    meal.disease.includes(disease)
                );
                displayMeals(filteredMeals);
    displayWeeklyPlanForDisease(disease);
            }
        }

        
function displayWeeklyPlanForDisease(disease) {
    const container = document.getElementById('weekContainer');
    const plan = weeklyPlans[disease];
    if (!plan) {
        container.innerHTML = `<p style="text-align:center;">ไม่มีแผนอาหารสำหรับโรคนี้</p>`;
        return;
    }
    container.innerHTML = plan.map(createDayCard).join('');
}


// ฟังก์ชัน Navigation
        function setupNavigation() {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Remove active class from all nav links
                    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                    
                    // Add active class to clicked link
                    this.classList.add('active');
                    
                    // Smooth scroll to section
                    const targetId = this.getAttribute('href');
                    if (targetId !== '#about') {
                        document.querySelector(targetId).scrollIntoView({
                            behavior: 'smooth'
                        });
                    } else {
                        alert('เกี่ยวกับเรา: NutriCare เป็นเว็บไซต์ให้ความรู้ด้านโภชนาการที่ผ่านการตรวจสอบโดยผู้เชี่ยวชาญทางการแพทย์ เพื่อช่วยเหลือผู้ที่มีโรคประจำตัวในการเลือกบริโภคอาหารที่เหมาะสมกับสุขภาพ');
                    }
                });
            });
        }

        // เพิ่ม Event Listener สำหรับการกด Enter ในช่องค้นหา
        document.getElementById('searchInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchMeals();
            }
        });

        // ฟังก์ชันเริ่มต้น
        function init() {
            displayMeals();
            displayWeeklyPlan();
            setupNavigation();
        }

        // เรียกใช้ฟังก์ชันเริ่มต้นเมื่อหน้าเว็บโหลดเสร็จ
        document.addEventListener('DOMContentLoaded', init);