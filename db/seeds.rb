# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



########## Users ##########
guest = User.create(
  username: "Guest",
  password: "123456789",
  bio: "Never stop exploring",
  cover_img_url: "https://res.cloudinary.com/foolishhunger/image/upload/v1506715469/guest/guest_cover.jpg",
  profile_img_url: "https://res.cloudinary.com/foolishhunger/image/upload/v1506711691/guest/guest_profile.jpg"
)
michael = User.create(
  username: "Michael",
  password: "mike123",
  bio: "A software developer at day, photographer at night. Connect with me @ https://www.linkedin.com/in/michael-zhu/ ",
  cover_img_url: "https://res.cloudinary.com/foolishhunger/image/upload/v1506710995/michael/michael_cover.jpg",
  profile_img_url: "https://res.cloudinary.com/foolishhunger/image/upload/c_scale,w_800/v1506806457/michael/DSC_8049_copy.jpg"
)
liam = User.create(
  username: "Liam",
  password: "liam123",
  bio: "Coffee Lover",
  cover_img_url: "https://res.cloudinary.com/foolishhunger/image/upload/v1506710569/liam/liam_cover.jpg",
  profile_img_url: "https://res.cloudinary.com/foolishhunger/image/upload/v1506709989/liam/liam_profile.jpg"
)
noah = User.create(
  username: "Noah",
  password: "noah123",
  bio: "Fitness is life. Stay active.",
  cover_img_url: "https://res.cloudinary.com/foolishhunger/image/upload/v1506710525/noah/noah_cover.jpg",
  profile_img_url: "https://res.cloudinary.com/foolishhunger/image/upload/v1506709958/noah/noah_profile.jpg"
)
emma = User.create(
  username: "Emma",
  password: "emma123",
  bio: "An avid photographer from New York who loves taking food pictures.",
  cover_img_url: "https://res.cloudinary.com/foolishhunger/image/upload/v1506710599/emma/emma_cover.jpg",
  profile_img_url: "https://res.cloudinary.com/foolishhunger/image/upload/v1506709978/emma/emma_profile.jpg"
)
jessica = User.create(
  username: "Jessica",
  password: "jessica123",
  bio: "Nature always wears the colors of the spirit. If you truly love nature, you will find beauty everywhere.",
  cover_img_url: "https://res.cloudinary.com/foolishhunger/image/upload/c_scale,w_2000/v1506710582/jessica/jessica_cover.jpg",
  profile_img_url: "https://res.cloudinary.com/foolishhunger/image/upload/v1506710005/jessica/jessieca_profile.jpg"
)
henry = User.create(
  username: "Henry",
  password: "henry123",
  bio: "Love conquers all. Show some love every day, every minute, every second.",
  cover_img_url: "https://res.cloudinary.com/foolishhunger/image/upload/c_scale,w_1280/v1506808179/henry/cover.jpg",
  profile_img_url: "https://res.cloudinary.com/foolishhunger/image/upload/c_scale,w_500/v1506808180/henry/profile_pic.jpg"
)

#############Follows #############
Follow.create(follower_id: guest.id, following_id: michael.id)
Follow.create(follower_id: michael.id, following_id: guest.id)
Follow.create(follower_id: guest.id, following_id: liam.id)
Follow.create(follower_id: liam.id, following_id: guest.id)
Follow.create(follower_id: guest.id, following_id: noah.id)
Follow.create(follower_id: noah.id, following_id: guest.id)
Follow.create(follower_id: guest.id, following_id: emma.id)
Follow.create(follower_id: emma.id, following_id: guest.id)
Follow.create(follower_id: guest.id, following_id: jessica.id)
Follow.create(follower_id: jessica.id, following_id: guest.id)

################ Photos ##############

#guest
g1 = Photo.create(
  author_id: guest.id,
  photo_title: "Getaway",
  photo_url: "https://res.cloudinary.com/foolishhunger/image/upload/c_scale,w_1280/v1506711693/guest/photo-1505841392587-67bfc23db3f9.jpg",
  photo_description: ""
)

g2 = Photo.create(
  author_id: guest.id,
  photo_title: "Meditation",
  photo_url: "https://res.cloudinary.com/foolishhunger/image/upload/c_scale,w_1280/v1506711692/guest/photo-1504448252408-b32799ff32f3.jpg",
  photo_description: ""
)

g3 = Photo.create(
  author_id: guest.id,
  photo_title: "Map",
  photo_url: "https://res.cloudinary.com/foolishhunger/image/upload/c_scale,w_1280/v1506711693/guest/photo-1497302347632-904729bc24aa.jpg",
  photo_description: ""
)

g4 = Photo.create(
  author_id: guest.id,
  photo_title: "Desert",
  photo_url: "https://res.cloudinary.com/foolishhunger/image/upload/v1506711692/guest/photo-1494596386710-d1f5ab0d4109.jpg",
  photo_description: ""
)

g5 = Photo.create(
  author_id: guest.id,
  photo_title: "food for thoughts",
  photo_url: "https://res.cloudinary.com/foolishhunger/image/upload/v1506711691/guest/photo-1487662701465-ee09afb4e1fa.jpg",
  photo_description: ""
)

#michael
m1 = Photo.create(
  author_id: michael.id,
  photo_title: "Work station",
  photo_url: "https://res.cloudinary.com/foolishhunger/image/upload/v1506710995/michael/photo-1438302292089-1bfacb810383.jpg",
  photo_description: ""
)

m2 = Photo.create(
  author_id: michael.id,
  photo_title: "Working on job application",
  photo_url: "https://res.cloudinary.com/foolishhunger/image/upload/v1506710994/michael/photo-1486312338219-ce68d2c6f44d.jpg",
  photo_description: ""
)

m3 = Photo.create(
  author_id: michael.id,
  photo_title: "M for Michael?",
  photo_url: "https://res.cloudinary.com/foolishhunger/image/upload/v1506710994/michael/photo-1496243975092-6ec259c776e2.jpg",
  photo_description: ""
)

m4 = Photo.create(
  author_id: michael.id,
  photo_title: "A glass of energy boost",
  photo_url: "https://res.cloudinary.com/foolishhunger/image/upload/v1506710997/michael/photo-1502599213010-875782f9bf52.jpg",
  photo_description: ""
)

m5 = Photo.create(
  author_id: michael.id,
  photo_title: "Photography 101",
  photo_url: "https://res.cloudinary.com/foolishhunger/image/upload/v1506710995/michael/photo-1484665739383-a1069a82d4be.jpg",
  photo_description: ""
)

#liam
l1 = Photo.create(
  author_id: liam.id,
  photo_title: "Coffee beans",
  photo_url: "https://res.cloudinary.com/foolishhunger/image/upload/c_scale,w_1280/v1506708204/liam/photo-1442550528053-c431ecb55509_cdnhuc.jpg",
  photo_description: ""
)

l2 = Photo.create(
  author_id: liam.id,
  photo_title: "Tasty coffee",
  photo_url: "https://res.cloudinary.com/foolishhunger/image/upload/c_scale,w_1280/v1506708206/liam/photo-1462917882517-e150004895fa_o4bxp6.jpg",
  photo_description: ""
)

l3 = Photo.create(
  author_id: liam.id,
  photo_title: "Color wheel",
  photo_url: "https://res.cloudinary.com/foolishhunger/image/upload/c_scale,w_1280/v1506708209/liam/photo-1498804103079-a6351b050096_k5k54j.jpg",
  photo_description: ""
)

l4 = Photo.create(
  author_id: liam.id,
  photo_title: "Morning brew",
  photo_url: "https://res.cloudinary.com/foolishhunger/image/upload/c_scale,w_1280/v1506708209/liam/photo-1501476116911-83efa0ed0983_lvqppp.jpg",
  photo_description: ""
)

l5 = Photo.create(
  author_id: liam.id,
  photo_title: "The morning grind",
  photo_url: "https://res.cloudinary.com/foolishhunger/image/upload/c_scale,w_1280/v1506708209/liam/photo-1502471602546-17554aac1160_a9pkvv.jpg",
  photo_description: ""
)

#noah
n1 = Photo.create(
  author_id: noah.id,
  photo_title: "16k of hard work",
  photo_url: "https://res.cloudinary.com/foolishhunger/image/upload/c_scale,w_1280/v1506708208/noah/8k_wwstvc.jpg",
  photo_description: ""
)

n2 = Photo.create(
  author_id: noah.id,
  photo_title: "Morning run ready",
  photo_url: "https://res.cloudinary.com/foolishhunger/image/upload/c_scale,w_1280/v1506708209/noah/jump_nvo8ul.jpg",
  photo_description: ""
)

n3 = Photo.create(
  author_id: noah.id,
  photo_title: "Leaping",
  photo_url: "https://res.cloudinary.com/foolishhunger/image/upload/c_scale,w_1280/v1506708213/noah/photo-1465080207318-3de7361f84e7_nlkac2.jpg",
  photo_description: "Take a leap of faith"
)

n4 = Photo.create(
  author_id: noah.id,
  photo_title: "Biking in the bay",
  photo_url: "https://res.cloudinary.com/foolishhunger/image/upload/c_scale,w_1280/v1506708214/noah/photo-1488401318902-f7feae66db20_p2d27i.jpg",
  photo_description: "After a 2 hours journey."
)

n5 = Photo.create(
  author_id: noah.id,
  photo_title: "Rocky mode",
  photo_url: "https://res.cloudinary.com/foolishhunger/image/upload/c_scale,w_1280/v1506708216/noah/top_rdb4aw.jpg",
  photo_description: "Morning run in New York"
)

#emma
e1 = Photo.create(
  author_id: emma.id,
  photo_title: "Ice cream in Iceland",
  photo_url: "https://res.cloudinary.com/foolishhunger/image/upload/c_scale,w_1280/v1506708206/emma/photo-1422246478030-ac94dfdc1dae_e0jjlo.jpg",
  photo_description: ""
)

e2 = Photo.create(
  author_id: emma.id,
  photo_title: "A proper lunch",
  photo_url: "https://res.cloudinary.com/foolishhunger/image/upload/c_scale,w_1280/v1506708206/emma/photo-1446611720526-39d16597055c_xusko6.jpg",
  photo_description: ""
)

e3 = Photo.create(
  author_id: emma.id,
  photo_title: "Grilled corn",
  photo_url: "https://res.cloudinary.com/foolishhunger/image/upload/c_scale,w_1280/v1506708206/emma/photo-1470119693884-47d3a1d1f180_p6qrx3.jpg",
  photo_description: ""
)

e4 = Photo.create(
  author_id: emma.id,
  photo_title: "the true Burger king",
  photo_url: "https://res.cloudinary.com/foolishhunger/image/upload/c_scale,w_1280/v1506708212/emma/photo-1504185945330-7a3ca1380535_yculqf.jpg",
  photo_description: ""
)

e5 = Photo.create(
  author_id: emma.id,
  photo_title: "A bowl of grape",
  photo_url: "https://res.cloudinary.com/foolishhunger/image/upload/c_scale,w_1280/v1506708211/emma/photo-1473229903343-d7903343f6c0_ozgtqv.jpg",
  photo_description: ""
)


#jessica
j1 = Photo.create(
  author_id: jessica.id,
  photo_title: "River",
  photo_url: "https://res.cloudinary.com/foolishhunger/image/upload/c_scale,w_1280/v1506708212/jessica/4575979c_g6pgwb.jpg",
  photo_description: ""
)

j2 = Photo.create(
  author_id: jessica.id,
  photo_title: "misty",
  photo_url: "https://res.cloudinary.com/foolishhunger/image/upload/c_scale,w_1280/v1506708211/jessica/photo-1437422061949-f6efbde0a471_klmfkf.jpg",
  photo_description: ""
)

j3 = Photo.create(
  author_id: jessica.id,
  photo_title: "waterfall",
  photo_url: "https://res.cloudinary.com/foolishhunger/image/upload/v1506708214/jessica/photo-1442850473887-0fb77cd0b337_krgfny.jpg",
  photo_description: ""
)

j4 = Photo.create(
  author_id: jessica.id,
  photo_title: "Fallen leaves",
  photo_url: "https://res.cloudinary.com/foolishhunger/image/upload/v1506708215/jessica/photo-1444863097070-0ae713d23558_m7mbfa.jpg",
  photo_description: ""
)

j5 = Photo.create(
  author_id: jessica.id,
  photo_title: "Tahoe",
  photo_url: "https://res.cloudinary.com/foolishhunger/image/upload/c_scale,w_1280/v1506708207/jessica/photo-1500323413110-71ec8ed382f0_ftrajm.jpg",
  photo_description: ""
)



#guest
g6 = Photo.create(
  author_id: guest.id,
  photo_title: "Herding sheeps",
  photo_url: "https://res.cloudinary.com/foolishhunger/image/upload/c_scale,w_1280/v1506715821/guest/1.jpg",
  photo_description: ""
)

g7 = Photo.create(
  author_id: guest.id,
  photo_title: "Transit",
  photo_url: "https://res.cloudinary.com/foolishhunger/image/upload/c_scale,w_1280/v1506715821/guest/2.jpg",
  photo_description: ""
)

g8 = Photo.create(
  author_id: guest.id,
  photo_title: "Hong Kong street",
  photo_url: "https://res.cloudinary.com/foolishhunger/image/upload/c_scale,w_1280/v1506715822/guest/3.jpg",
  photo_description: ""
)

g9 = Photo.create(
  author_id: guest.id,
  photo_title: "In the air",
  photo_url: "https://res.cloudinary.com/foolishhunger/image/upload/c_scale,w_1280/v1506715821/guest/4.jpg",
  photo_description: ""
)

g10 = Photo.create(
  author_id: guest.id,
  photo_title: "Hut",
  photo_url: "https://res.cloudinary.com/foolishhunger/image/upload/c_scale,w_1280/v1506715821/guest/5.jpg",
  photo_description: ""
)

######## henry #################

h1 = Photo.create(
  author_id: henry.id,
  photo_title: "Heart sunset",
  photo_url: "https://res.cloudinary.com/foolishhunger/image/upload/v1506808178/henry/h1.jpg",
  photo_description: "We love the things we love for what they are."
)
h2 = Photo.create(
  author_id: henry.id,
  photo_title: "LOVE",
  photo_url: "https://res.cloudinary.com/foolishhunger/image/upload/v1506808178/henry/h2.jpg",
  photo_description: "Your heart is free, have the courage to follow it."
)
h3 = Photo.create(
  author_id: henry.id,
  photo_title: "love in the air",
  photo_url: "https://res.cloudinary.com/foolishhunger/image/upload/v1506808179/henry/h3.jpg",
  photo_description: "Love is of all passions the strongest, for it attacks simultaneously the head, the heart, and the senses."
)
h4 = Photo.create(
  author_id: henry.id,
  photo_title: "Just married",
  photo_url: "https://res.cloudinary.com/foolishhunger/image/upload/v1506808178/henry/h4.jpg",
  photo_description: "And in the end, the love you take, is equal to the love you make."
)
h5 = Photo.create(
  author_id: henry.id,
  photo_title: "Paris",
  photo_url: "https://res.cloudinary.com/foolishhunger/image/upload/v1506808179/henry/h5.jpg",
  photo_description: "Love is composed of a single soul inhabiting two bodies."
)
h6 = Photo.create(
  author_id: henry.id,
  photo_title: "I shell heart you",
  photo_url: "https://res.cloudinary.com/foolishhunger/image/upload/v1506808179/henry/h6.jpg",
  photo_description: "You have half our gifts. I the other. Together we make a whole. Together we are much more powerful."
)
h7 = Photo.create(
  author_id: henry.id,
  photo_title: "One cute couple",
  photo_url: "https://res.cloudinary.com/foolishhunger/image/upload/v1506808179/henry/h7.jpg",
  photo_description: "If I know what love is, it is because of you."
)
h8 = Photo.create(
  author_id: henry.id,
  photo_title: "Walking down the street",
  photo_url: "https://res.cloudinary.com/foolishhunger/image/upload/v1506808179/henry/h8.jpg",
  photo_description: "Love never claims, it ever gives."
)
h9 = Photo.create(
  author_id: henry.id,
  photo_title: "Love is love",
  photo_url: "https://res.cloudinary.com/foolishhunger/image/upload/v1506808180/henry/h9.jpg",
  photo_description: ""
)
h10 = Photo.create(
  author_id: henry.id,
  photo_title: "Let's grow old together",
  photo_url: "https://res.cloudinary.com/foolishhunger/image/upload/v1506808180/henry/h10.jpg",
  photo_description: "I need your loving, loving is what I need now."
)
