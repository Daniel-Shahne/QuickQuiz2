﻿using Microsoft.EntityFrameworkCore.Metadata.Internal;
using QuickQuiz2.Models;
using System.IO;
using System;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using static System.Runtime.InteropServices.JavaScript.JSType;
using System.Diagnostics.Metrics;
using System.Drawing;
using System.Net.NetworkInformation;
using Microsoft.AspNetCore.Routing;
using static Azure.Core.HttpHeader;
using System.Text.RegularExpressions;
using System.Text;

namespace QuickQuiz2.Static
{
    public static class SeedingData
    {


        static private List<QuestionModel> _animalQuestions = new List<QuestionModel>
        {
            new QuestionModel()
            {
                Id = 1,
                Category = "Animals",
                Answer = "Elephant",
                ImagePath = "elephant.png",
                Description = "Introducing the incredible elephant! These gentle giants are found in various parts of the world, like Africa and Asia." +
                " They're the largest land animals on Earth and can weigh as much as a few cars put together!" +
                " Elephants are super smart and have big, floppy ears that help them keep cool." +
                " When it's hot, they spray themselves with water using their trunks, which are like their own personal water hoses." +
                " These plant-eating pals have a huge appetite and love munching on leaves, grass, and fruits." +
                " Elephants live in close-knit families called herds, where they look out for each other. Just like us, they're curious and full of surprises!",
                HardDiffDesc = "I'm a gentle giant found in places like Africa and Asia. I'm the biggest land animal, with floppy ears, a long trunk, and I love eating plants. Who am I?"
            },
            new QuestionModel()
            {
                Id = 2,
                Category = "Animals",
                Answer = "Crocodile",
                ImagePath = "crocodile.png",
                Description = "Meet the amazing crocodile! These fascinating reptiles can be found in warm places around the world, like Africa, Asia, and Australia." +
                " Crocs love hanging out near water, like rivers and swamps. They're like living dinosaurs with tough, scaly skin and powerful jaws." +
                " Crocodiles are fantastic swimmers and often stay hidden underwater, waiting for their next meal. Speaking of meals, they're carnivores," +
                " which means they eat meat. From fish to birds, they have a diverse menu! Crocodiles can grow to be really big, sometimes over 20 feet long!" +
                " Remember, while they might look scary, they're an important part of their ecosystems. Give them their space when you spot one!",
                HardDiffDesc = "I'm a tough reptile found in warm places around the world like Africa and Asia. I have scaly skin, powerful jaws, and love swimming in rivers. What am I?"
            },
            new QuestionModel()
            {
                Id = 3,
                Category = "Animals",
                Answer = "Hammerhead Shark",
                ImagePath = "hammerhead.png",
                Description = "Dive into the world of hammerhead sharks!" +
                " These cool creatures swim in the oceans around the globe, from warm tropical waters to cooler seas." +
                " What makes them stand out are their hammer-shaped heads, which are like underwater radar! This shape helps them find food," +
                " like squids and fish, even in the dark depths of the ocean. Hammerheads are strong swimmers and often travel in groups called schools." +
                " They're not usually interested in bothering humans, so if you spot one, it's best to just admire from a distance." +
                " These sharks might look a little strange, but they're perfectly designed for life underwater!",
                HardDiffDesc = "Dive into the ocean world with an amazing creature known for its hammer-shaped head!" +
                " This special feature helps it find food and swim together with its friends. Can you guess what this unique underwater animal is?"
            },
            new QuestionModel() { 
                Id = 4,
                Category = "Animals",
                Answer = "Raccoon",
                ImagePath = "raccoon.png",
                Description = "Get ready to meet the clever raccoon! These furry friends are found in North and Central America." +
                " Raccoons are famous for their mask-like markings around their eyes, making them look like little bandits." +
                " They're skilled climbers and love hanging out in forests, near rivers, and even in cities." +
                " Raccoons are omnivores, which means they eat both plants and animals. They have tiny 'hands' that they use to grab and explore things," +
                " just like us! These nocturnal creatures are most active at night and have a knack for finding food anywhere. Whether they're washing their meals or solving puzzles," +
                " raccoons are known for their intelligence and adaptability.",
                HardDiffDesc = "A clever creature with mask-like markings around its eyes, as if it's a little bandit!" +
                " This furry friend is skilled at climbing, exploring, and finding food anywhere. Can you guess which resourceful animal this is?"
            },
            new QuestionModel()
            {
                Id = 5,
                Category = "Animals",
                Answer = "Quokka",
                ImagePath = "quokka.png",
                Description = "Get ready to meet the adorable quokka, a special animal found in Australia!" +
                " Quokkas are famous for their friendly smiles and bouncy moves. You can spot them on Rottnest Island, their cozy home." +
                " These little marsupials are like mini kangaroos, but extra cute! Quokkas are herbivores, which means they love munching on plants, leaves, and yummy grasses." +
                " They're about the size of a cat or small dog, making them perfect pocket-sized pals. Remember, if you see a quokka," +
                " let them enjoy their island paradise in peace and take a picture from a safe distance!",
                HardDiffDesc = "Meet a special animal from Australia! It has a friendly smile, loves plants, and is about the size of a small dog. Can you guess what it is?"

            },
            new QuestionModel()
            {
                Id = 6,
                Category = "Animals",
                Answer = "Alpaca",
                ImagePath = "alpaca.png",
                Description = "Say hello to the adorable alpacas! These fluffy creatures call the high mountains of South America their home, where the air is cool and the landscapes are stunning. Alpacas are known for their super soft wool, which is used to make cozy clothes. They're like smaller cousins of llamas, but with even softer fur. Alpacas are gentle and friendly, often living in herds and looking out for each other. They communicate using humming sounds and gentle nudges. These herbivores munch on grass and plants all day long, and their big eyes and perky ears make them extra cute. Whether for their wool or their friendship, alpacas are truly special animals!",
                HardDiffDesc = "I'm a fluffy friend from the high mountains of South America! My super soft wool is used to make cozy clothes, and my big eyes and perky ears make me extra cute. I'm like a smaller cousin of llamas, and I munch on plants all day long. Who am I?"
            },
            new QuestionModel()
            {
                Id = 7,
                Category = "Animals",
                Answer = "Meerkat",
                ImagePath = "meerkat.png",
                Description = "Meet the curious meerkats, small mammals that live in the dry deserts of Africa. These adorable creatures are known for their alertness and teamwork. Meerkats live in groups called 'clans' and they work together to keep each other safe. They take turns watching for predators, like eagles and snakes, while others search for food. With their sharp eyes and long tails, they're great at balancing and standing on their hind legs to get a better view of their surroundings. Meerkats are social animals and they love to play and groom each other. If you ever spot them, you'll be sure to see their playful and vigilant nature on full display.",
                HardDiffDesc = "I'm a fluffy friend from the high mountains of South America! My super soft wool is used to make cozy clothes, and my big eyes and perky ears make me extra cute. I'm like a smaller cousin of llamas, and I munch on plants all day long. Who am I?"
            },
            new QuestionModel()
            {
                Id = 8,
                Category = "Animals",
                Answer = "Panda",
                ImagePath = "panda.png",
                Description = "Say hello to the cuddly giant pandas! These adorable creatures are native to China, where they live in the cool bamboo forests. Pandas are famous for their black and white fur, which helps them blend in among the trees. They're mostly herbivores and their favorite food is bamboo shoots. Pandas have a special thumb-like wrist bone that helps them hold onto bamboo stems while they eat. They're not big fans of moving fast, so they spend a lot of time eating and relaxing. These gentle giants are skilled climbers and good swimmers too! With their round faces and fluffy bodies, pandas are some of the most lovable animals on the planet.",
                HardDiffDesc = "I'm native to China, living in bamboo forests and known for my black and white fur. I love munching on bamboo shoots, have a special wrist bone to help me eat, and while I enjoy climbing trees, I also prefer to relax. Who am I?"
            },
            new QuestionModel(){
                Id = 9,
                Category = "Animals",
                Answer = "Fennec Fox",
                ImagePath = "fennecfox.png",
                Description = "Meet the adorable fennec foxes, tiny creatures with big ears! These cute foxes make their home in the sandy deserts of North Africa. Fennecs have the largest ears relative to their body size of any fox, which help them hear sounds from far away and stay cool in the hot desert. They're also known for their soft, sandy-colored fur and large eyes. Fennec foxes are great diggers, creating burrows to escape the heat and predators. Despite their small size, they're quick and clever hunters, catching insects and small animals. With their charming looks and desert adaptations, fennec foxes are a true wonder of the wild!",
                HardDiffDesc = "I have large ears relative to my size, live in the sandy deserts of North Africa, and am known for my soft, sandy-colored fur. I dig burrows to hide from the sun and am a clever hunter despite my small size. Who am I?",
            },
            new QuestionModel(){
                Id = 10,
                Category = "Animals",
                Answer = "Sea Otter",
                ImagePath = "seaotter.png",
                Description = "Dive into the world of sea otters, the playful ocean adventurers! These amazing animals live in the chilly waters of the Pacific Ocean. Sea otters have thick fur that keeps them warm, but they also use tools like rocks to crack open shellfish for a tasty meal. They're the only marine mammals known to use tools! Sea otters are known for their love of play, often seen floating on their backs, grooming their fur, and even holding hands with each other to stay together in groups called rafts. They're expert swimmers and divers, with webbed feet and waterproof fur. These furry friends are a joy to watch as they glide and frolic in the waves.",
                HardDiffDesc = "I live in the chilly waters of the Pacific Ocean, have thick fur to keep me warm, and am known for using tools like rocks to eat. I float on my back, sometimes holding hands with my peers in groups called rafts, and am an expert swimmer. Who am I?",
            },
            new QuestionModel(){
                Id = 11,
                Category = "Animals",
                Answer = "Sea Horse",
                ImagePath = "seahorse.png",
                Description = "Dive into the magical world of seahorses! These enchanting creatures live in the ocean waters around the globe, from warm tropical seas to cooler oceans. Seahorses are known for their unique appearance, with their horse-like heads, curly tails, and intricate patterns. They're not strong swimmers like other fish; instead, they use their tails to anchor themselves to objects like coral and seagrass. Seahorses are also quite the doting dads – it's the males who carry the eggs in a special pouch until they hatch! These small creatures have big personalities and are excellent camouflagers, blending in with their surroundings to stay safe. Watching seahorses glide through the water is like witnessing a beautiful underwater dance!",
                HardDiffDesc = "I live in oceans around the world, have a horse-like head, curly tail, and am known for my intricate patterns. Unlike other fish, I anchor myself using my tail, and uniquely, the males of my kind carry the eggs in a pouch. Who am I?"
            },
            new QuestionModel(){
                Id = 12,
                Category = "Animals",
                Answer = "Rattlesnake",
                ImagePath = "rattlesnake.png",
                Description = "Meet the intriguing rattlesnakes, slithering inhabitants of North and South America! These reptiles are known for their distinct rattles at the end of their tails, which they shake to warn other animals when they're feeling threatened. Rattlesnakes live in various environments, from deserts to forests. They use their excellent senses, including heat-sensing pits on their faces, to locate their prey. Rattlesnakes are carnivores, eating small mammals, birds, and even other snakes. Despite their reputation, rattlesnakes play a crucial role in maintaining the balance of their ecosystems. Remember, if you encounter one in the wild, give it plenty of space to move along and do its important work.",
                HardDiffDesc = "I slither across North and South America, have a distinctive rattle at the end of my tail, and possess heat-sensing pits on my face to find my prey. I can live in both deserts and forests, and play a vital role in my ecosystem. Who am I?",
            },
            new QuestionModel() {
                Id = 13,
                Category = "Animals",
                Answer = "Sloth",
                ImagePath = "sloth.png",
                Description = "Get ready to meet the slow-moving sloths, nature's laid-back adventurers! These fascinating creatures live in the rainforests of Central and South America. Sloths are known for their leisurely pace, spending most of their time hanging upside down in trees. They move so slowly because their diet mainly consists of leaves, which aren't very energy-rich. Sloths even sleep upside down, which is super cool! With long claws perfect for gripping branches, they're skilled climbers. Their fur is home to a whole ecosystem of tiny creatures, like algae and insects. Despite their slow lifestyle, sloths are essential to the rainforest, and their unique ways make them a favorite among nature enthusiasts.",
                HardDiffDesc = "I live in the rainforests of Central and South America, love hanging upside down in trees, and move at a leisurely pace because of my leafy diet. With long claws and fur that hosts tiny creatures like algae, I am a favorite in the animal kingdom. Who am I?"
            },
            new QuestionModel() {
                Id = 14,
                Category = "Animals",
                Answer = "Tiger",
                ImagePath = "tiger.png",
                Description = "Roar into the world of tigers, the majestic rulers of the jungle! These magnificent big cats can be found in various parts of Asia, from India to Siberia. Tigers are known for their beautiful orange coats with black stripes, each pattern being unique, just like human fingerprints. They're excellent hunters, with sharp teeth and powerful bodies. Tigers are solitary creatures that prefer to live and hunt alone, but they can swim surprisingly well, making them one of the few big cats that enjoy water. Unfortunately, some tigers are endangered due to habitat loss and poaching, so it's important to protect these amazing animals. Hearing a tiger's roar in the wild is a memory you'll never forget!",
                HardDiffDesc = "I'm a majestic big cat with orange fur and black stripes, found in parts of Asia. My unique stripe pattern is like a fingerprint. I'm a skilled solitary hunter and surprisingly, I'm a good swimmer too. Who am I?"
            },
            new QuestionModel() {
                Id = 15,
                Category = "Animals",
                Answer = "Octopus",
                ImagePath = "octopus.png",
                Description = "Dive deep into the mysterious world of octopuses! These incredible creatures live in oceans all around the globe, from shallow waters to the deep sea. Octopuses are famous for their flexible bodies, which are covered in suction cups that help them grip onto surfaces. They're master escape artists, able to fit through tiny spaces and even change the color and texture of their skin to blend in with their surroundings. Octopuses are super smart, known for their problem-solving skills and even playing with toys! Some octopuses carry shells or other objects to use as shelters, just like having a cozy home. Watching these underwater wonders glide and change shape is like watching a living work of art!",
                HardDiffDesc = "I live in oceans worldwide, from shallow areas to the deep sea. I can change my skin's color and texture, have a flexible body with suction cups, and am known for my intelligence and problem-solving skills. Who am I?"
            },
            new QuestionModel() {
                Id = 16,
                Category = "Animals",
                Answer = "Kangaroo",
                ImagePath = "kangaroo.png",
                Description = "Jump into the world of kangaroos, the bouncy icons of Australia! These amazing marsupials call the Australian outback their home, where they roam vast grasslands and forests. Kangaroos are known for their powerful hind legs, which they use to hop around in large bounds, covering great distances in no time. They're excellent jumpers and can even hop at high speeds. Kangaroos also have a unique way of carrying their babies, called joeys, in a pouch on their bellies. They're herbivores, enjoying a diet of plants and grasses. With their curious personalities and distinctive tails, kangaroos are a true symbol of the wild Australian landscape!",
                HardDiffDesc = "I'm a bouncy marsupial from Australia, known for my powerful hind legs that let me cover great distances quickly. I carry my baby, known as a joey, in a pouch on my belly and enjoy a diet of plants. Who am I?"
            },
            new QuestionModel() {
                Id = 17,
                Category = "Animals",
                Answer = "Polar Bear",
                ImagePath = "polarbear.png",
                Description = "Welcome to the chilly world of polar bears! These incredible creatures are the largest land carnivores and are found in the Arctic regions. Polar bears have thick, white fur that helps them blend into their snowy surroundings. They're excellent swimmers and use their strong front paws like paddles to navigate through icy waters in search of seals, their favorite food. Polar bears are well adapted to cold climates, with a layer of blubber under their skin that keeps them warm. They're known for their patience and determination while hunting for food. As the ice in the Arctic changes due to climate, it's important for us to help protect their home and the amazing wildlife that depends on it.",
                HardDiffDesc = "I'm the largest land carnivore, living in the Arctic regions with thick, white fur to blend into snowy landscapes. I'm an excellent swimmer and rely on seals as my main food source. With a layer of blubber to keep warm in the cold, who am I?"
            },
            new QuestionModel() {
                Id = 18,
                Category = "Animals",
                Answer = "Dolphin",
                ImagePath = "dolphin.png",
                Description = "Dive into the world of dolphins, the playful and intelligent ocean acrobats! These amazing creatures are found in oceans all around the world, from warm tropical waters to colder seas. Dolphins are known for their sleek bodies, curved dorsal fins, and their love of leaping out of the water. They're excellent swimmers, using their tails to glide and propel themselves through the waves. Dolphins are also incredibly social animals, often living in groups called pods. They communicate with each other using clicks, whistles, and body language. These carnivores are skilled hunters, eating fish and sometimes squid. Their playful antics and friendly nature make dolphins a favorite among both kids and adults!",
                HardDiffDesc = "I'm a sleek and playful creature found in oceans worldwide, known for leaping out of the water and my curved dorsal fin. I live in groups called pods and communicate using clicks and whistles. With a diet including fish and occasionally squid, who am I?"
            },
            new QuestionModel() {
                Id = 19,
                Category = "Animals",
                Answer = "Whale Shark",
                ImagePath = "whaleshark.png",
                Description = "Dive deep into the ocean to meet the gentle giants known as whale sharks! These incredible creatures are the largest fish on Earth, found in warm oceans around the globe. Despite their name, they're not whales, but rather huge sharks. Whale sharks have beautiful spotted patterns on their backs and can grow to be as long as a school bus! Despite their size, they're harmless to humans, as they feed on tiny plankton and small fish. Whale sharks are slow swimmers, gracefully gliding through the water. They're often seen near the surface, basking in the sun. These magnificent beings remind us of the wonders that lie beneath the waves.",
                HardDiffDesc = "I'm the largest fish on Earth, found in warm oceans with a spotted pattern on my back. Despite my name, I'm not a whale, and I feed on tiny plankton and small fish. Often seen near the surface and as long as a school bus, who am I?"
            },

            new QuestionModel()
                {
                Id = 20,
                Category = "Animals",
                Answer = "Moose",
                ImagePath = "moose.png",
                Description = "Step into the woods and meet the magnificent moose! These impressive animals are found in the forests and meadows of North America, Europe, and Asia. Moose are known for their huge size, long legs, and large, broad antlers (only the males have them!). Their antlers are like crowns, and each set is unique. Moose are herbivores, munching on plants, leaves, and even aquatic plants. They're great swimmers and can dive underwater to feast on aquatic plants. Moose are solitary animals and they're quite quiet, even though they're big. Seeing a moose is a special treat, as they're a symbol of the wild and untamed wilderness.",
                HardDiffDesc = "I roam the forests and meadows across North America, Europe, and Asia, known for my large size and broad antlers that are unique to each male. I love munching on plants and am a skilled swimmer, diving underwater for aquatic feasts. Who am I?"
            },
             new QuestionModel()
                {
                Id = 21,
                Category = "Animals",
                 Answer = "Fox",
                 ImagePath = "fox.png"
                , Description = "Enter the world of cunning foxes! These clever creatures are found all over the world, in forests, grasslands, and even cities. Foxes are known for their beautiful fur coats, which can come in shades of red, gray, and even black. They have bushy tails that they use for balance and as a cozy wrap to keep warm. Foxes are skilled hunters, eating everything from small mammals to insects. They're also great jumpers and diggers, using their sharp claws to create underground homes called dens. Some foxes are nocturnal, which means they're most active at night, while others roam during the day. Foxes' adaptability and playful behavior make them a fascinating addition to the animal kingdom!",
                HardDiffDesc ="I live in various habitats worldwide, known for my beautiful fur and bushy tail that I use for warmth. I can be red, gray, or black and am a skilled hunter and digger, creating underground homes. I might be active at night or during the day. Who am I?"
            },
             new QuestionModel()
                {
                    Id = 22,
                    Category = "Animals",
                    Answer = "Lynx",
                    ImagePath = "lynx.png"
                , Description = "Discover the mysterious world of lynxes! These secretive cats can be found in various parts of the world, including North America, Europe, and Asia. Lynxes are known for their tufted ears and short tails. They have sharp senses, with excellent hearing and keen eyesight. Their thick fur coats help them survive in cold climates. Lynxes are skilled hunters, using their strong legs to pounce on prey like rabbits and birds.They're solitary animals that prefer to roam alone, but they leave behind their footprints and scent markings as signs of their presence. With their elusive nature and striking appearance, lynxes remind us of the wild beauty that exists beyond our view.",
                    HardDiffDesc ="I roam parts of North America, Europe, and Asia, known for my tufted ears and short tail. With a thick fur coat suited for cold climates, I'm a skilled hunter that prefers solitude, hunting prey like rabbits. Though I might be elusive, my footprints and scent markings tell of my presence. Who am I?"
            },
            new QuestionModel()
                {
                Id = 23,
                Category = "Animals",
                Answer = "Dingo",
                ImagePath = "dingo.png",
                Description = "Explore the unique world of dingos! These wild dogs call Australia their home, living in a variety of habitats from deserts to forests. Dingos have a sandy-colored coat that helps them blend into their surroundings. They're known for their pointed ears and bushy tails. Dingos are skilled hunters, with sharp teeth and keen senses. They eat a diet that includes small mammals, birds, and even fruits. Dingos are also known for their distinct howling, which can be heard across the landscape. They're great runners and jumpers, helping them catch prey or navigate their environment. Dingos have a special place in Australian ecosystems, adding to the country's rich biodiversity!",
                HardDiffDesc = "I'm a wild dog from Australia with a sandy-colored coat, pointed ears, and a bushy tail. Skilled in hunting, I feed on small mammals, birds, and even fruits. My distinct howling can be heard echoing in my habitat, and I'm known for my agility in running and jumping. Who am I?",
            },
            new QuestionModel()
                {
                Id = 24,
                Category = "Animals",
                 Answer = "Deer",
                 ImagePath = "deer.png", 
                Description = "Step into the world of graceful deer! These elegant animals are found in forests, grasslands, and even mountains around the world. Deer are known for their beautiful antlers, which grow larger and more complex as they get older. Only the males have antlers, and they use them to attract mates and establish dominance. Deer are herbivores, enjoying a diet of plants, leaves, and grass. They have keen senses, including excellent hearing and a keen sense of smell to detect danger. Deer are agile runners, able to quickly escape from predators. Watching deer gracefully move through their natural habitats is a true glimpse into the beauty of the animal kingdom.",
                HardDiffDesc ="I roam forests, grasslands, and mountains globally, known for my beautiful antlers that only the males carry. With a plant-based diet and keen senses to detect danger, I'm an agile runner. My grace and elegance embody the beauty of the natural world. Who am I?",
            },
            new QuestionModel()
            {
                Id = 25,
                Category = "Animals",
                Answer = "Capybara",
                ImagePath = "capybara.png",
                Description = "Welcome to the world of capybaras, the social and adorable giants! These fascinating creatures are native to South America, where they make their homes near water sources like rivers and lakes. Capybaras are known for their big size and friendly nature. They're like oversized guinea pigs with long legs. They're excellent swimmers and can even stay underwater for several minutes, using their nostrils and eyes positioned on the top of their heads.Capybaras live in groups called herds and enjoy soaking in the water to stay cool in the hot weather.With their relaxed personalities and unique appearance, capybaras are a true delight to encounter in the wild!",
                HardDiffDesc ="I'm native to South America, often found near water sources. Resembling an oversized guinea pig with long legs, I'm an excellent swimmer and can stay submerged for a while. Living in groups and enjoying cool waters, who am I with a unique appearance and relaxed personality?",
            },
            new QuestionModel()
            {
            Id = 26,
            Category = "Animals",
             Answer = "Orangutan",
             ImagePath = "orangutan.png", 
            Description = "Enter the lush rainforests and meet the amazing orangutans! These incredible creatures are found in the rainforests of Southeast Asia, including Borneo and Sumatra. Orangutans are known for their distinctive reddish-brown fur and their gentle and intelligent nature. They spend most of their time high up in the trees, using their long arms to swing and move through the branches.Orangutans are great problem solvers and are known to use tools like sticks and leaves to aid in their daily activities.They're also skilled fruit-eaters, munching on a variety of fruits, leaves, and insects. With their wise eyes and unique behaviors, orangutans are a true treasure of the rainforest!",
            HardDiffDesc = "I live in the rainforests of Southeast Asia, have distinctive reddish-brown fur, and swing high up in trees with my long arms.Known for my intelligence, I use tools like sticks and leaves to help me out. Feasting on fruits, leaves, and insects, who am I with wise eyes and a gentle nature?",
            },
            new QuestionModel()

            {
            
             Id = 27,
            
            Category = "Animals",
            
            Answer = "Donkey",
            
            ImagePath = "donkey.png",
            
            Description = "Say hello to the hardworking and friendly donkeys! These wonderful animals can be found in various parts of the world, often living on farms or in rural areas. Donkeys are known for their strong and sturdy build, with long ears that can move independently to hear sounds from different directions. They have a calm and patient nature, making them great companions and helpers. Donkeys are used to carry loads, pull carts, and even help plow fields. They're herbivores, enjoying a diet of grass and plants. Donkeys are known for their 'hee-haw' sounds, which they use to communicate with each other. With their trusty and dependable personalities, donkeys are beloved by many!",
            
            HardDiffDesc =" I can be found on farms or in rural areas, known for my sturdy build and long ears that move independently. With a calm nature, I help carry loads, pull carts, and make a distinctive 'hee-haw' sound. Eating grass and plants, who am I, known for being trusty and dependable?"
            
            },
            
            new QuestionModel()
            
            {
            
            Id = 28,
            
            Category = "Animals",
            
            Answer = "Horse",
            
            ImagePath = "horse.png",
            
            Description = "Step into the world of magnificent horses! These graceful creatures are found all over the world, from grassy plains to rugged mountains. Horses are known for their powerful bodies, flowing manes, and strong legs built for running. They've been our companions for centuries, helping humans with tasks like riding, pulling carts, and more. Horses come in different breeds, each with its own special qualities and colors. They have keen senses, including excellent hearing and a keen sense of smell to detect danger. Horses are herbivores, munching on hay, grass, and grains. With their loyalty and beauty, horses hold a special place in our hearts and history.",
            
            HardDiffDesc ="I roam from grassy plains to rugged mountains with a powerful body and flowing mane. Serving as human companions for centuries, I come in various breeds and colors. With a diet of hay, grass, and grains, and known for my loyalty and beauty, who am I?"
            
            },
            
            new QuestionModel()
                        {
            Id = 29,
            Category = "Animals",
            Answer = "Highland Cow",
            ImagePath = "highlandcow.png",
            Description = "Discover the charming world of Highland cows, also known as Highland cattle! These adorable animals come from the rugged landscapes of Scotland. Highland cows are known for their long, shaggy coats that help them stay warm in the cold weather. They have distinctive, curved horns and a fringe of hair covering their eyes. Highland cows have a calm and gentle temperament, making them a favorite among both farmers and visitors. They're well-suited to life in the mountains, with strong hooves that help them navigate rocky terrain. These herbivores graze on grass and plants. With their unique looks and gentle personalities, Highland cows are a true symbol of the Scottish countryside!",
            HardDiffDesc ="I hail from the rugged landscapes of Scotland, sporting a long, shaggy coat and curved horns. With a fringe of hair covering my eyes and a calm demeanor, I graze on grass and plants in the mountains. Symbolizing the Scottish countryside with my unique appearance, who am I?"
            
            },
            new QuestionModel()
                        {
            Id = 30,
            Category = "Animals",
            Answer = "Chipmunk",
            ImagePath = "chipmunk.png",
            Description = "Meet the lively chipmunks, tiny creatures with big personalities! These cute little animals are found in North America, often living in forests, woodlands, and even gardens. Chipmunks are known for their striped patterns on their backs, resembling racing stripes. They're expert climbers and can easily scamper up trees and bushes. Chipmunks are busy creatures, always on the lookout for food. They have cheek pouches that they use to store and carry their snacks, like nuts and seeds, back to their burrows. These burrows are their homes, where they hibernate during the colder months. With their energetic antics and playful behaviors, chipmunks add a touch of excitement to the natural world!",
            HardDiffDesc ="I live in North America, sporting stripes on my back and expertly climbing trees. Always searching for food, I use my cheek pouches to carry snacks like nuts and seeds to my burrow. With my energetic and playful nature, who am I?"
            
            },
            new QuestionModel()
                        {
            Id = 31,
            Category = "Animals",
            Answer = "Squirrel Monkey",
            ImagePath = "squirrelmonkey.png",
            Description = "Enter the treetops and meet the lively squirrel monkeys! These energetic primates are found in the rainforests of Central and South America. Squirrel monkeys are known for their playful nature and quick movements. They have short fur and a distinctive white mask around their eyes. Squirrel monkeys live in large groups called troops, where they communicate with each other using high-pitched calls. They're skilled jumpers and climbers, using their long, strong tails to help them balance. These omnivores enjoy a varied diet that includes fruits, insects, and even flowers. Squirrel monkeys remind us of the lively and diverse life that thrives in the vibrant rainforest ecosystems!",
            HardDiffDesc ="Enter the treetops and meet the lively squirrel monkeys! These energetic primates are found in the rainforests of Central and South America. Squirrel monkeys are known for their playful nature and quick movements. They have short fur and a distinctive white mask around their eyes. Squirrel monkeys live in large groups called troops, where they communicate with each other using high-pitched calls. They're skilled jumpers and climbers, using their long, strong tails to help them balance. These omnivores enjoy a varied diet that includes fruits, insects, and even flowers. Squirrel monkeys remind us of the lively and diverse life that thrives in the vibrant rainforest ecosystems!"
            
            },
            new QuestionModel()
                        {
            Id = 32,
            Category = "Animals",
            Answer = "Ostrich",
            ImagePath = "ostrich.png",
            Description = "Step into the world of ostriches, the giants of the bird kingdom! These fascinating birds are found in the grasslands and deserts of Africa. Ostriches are known for their incredible size and long legs, which help them run at impressive speeds. In fact, they're the fastest runners among birds! Despite their large size, they have small heads and long necks. Ostriches have strong legs that can deliver powerful kicks if they feel threatened. They're flightless birds, but their powerful legs are perfect for defense and running from predators. Ostriches are omnivores, enjoying a diet that includes plants, insects, and even small animals. With their unique characteristics and swift movements, ostriches are a true marvel of the animal kingdom!",
            HardDiffDesc ="I'm a giant bird from the grasslands and deserts of Africa, known for my incredible speed on land. With long legs and a small head, I can't fly but can deliver powerful kicks. Enjoying a diet from plants to small animals, who am I with a unique place in the bird kingdom?"
            
            },
            new QuestionModel()
                        {
            Id = 33,
            Category = "Animals",
            Answer = "Platypus",
            ImagePath = "platypus.png",
            Description = "Dive into the unique world of platypuses, the incredible creatures of Australia! These fascinating mammals are known for their combination of features from different animals. Platypuses have the body of a beaver, the bill of a duck, and the feet of an otter. They live in freshwater habitats like rivers and streams. Platypuses are excellent swimmers and have webbed feet and a streamlined body to help them glide through the water. They're also equipped with a special sixth sense – electroreception – which allows them to detect the electrical signals emitted by prey in the water. Platypuses are nocturnal, which means they're most active at night. With their one-of-a-kind appearance and behaviors, platypuses truly stand out in the animal kingdom!",
            HardDiffDesc ="I hail from Australia, with a body resembling a beaver, a duck's bill, and otter-like feet. I thrive in freshwater habitats, and possess a special sense to detect electrical signals from prey. Being active mainly at night, and with my unique combination of features, who am I?"
            
            },
            new QuestionModel()
            {
                Id = 34,
                Category = "Animals",
                Answer = "Cat",
                ImagePath = "cat.png",
                Description = "Step into the world of cats, the mysterious and independent creatures!" +
                " These captivating animals are found all over the world, from city streets to forests." +
                " Cats come in different sizes and colors, with fur that can be smooth, fluffy, or even wild like a tiger's stripes." +
                " They're known for their sharp senses, including keen hearing, night vision, and sensitive whiskers." +
                " Cats are natural hunters, using their retractable claws and stealthy movements to catch prey like birds and mice." +
                " Despite their reputation for independence, cats can be loving companions and enjoy human company." +
                " Whether they're purring in our laps or exploring their surroundings, cats remind us of the diversity and charm of the animal kingdom.",
                HardDiffDesc = "I can be found worldwide, from cities to forests, with a variety of fur types and colors." +
                " Known for my sharp senses, retractable claws, and hunting skills, I can be a mysterious yet loving companion to humans." +
                " Purring in laps or exploring my environment, who am I with a captivating charm?"
            },
            new QuestionModel()
            {
                Id = 35,
                Category = "Animals",
                Answer = "Hedgehog",
                ImagePath = "hedgehog.png",
                Description = "Enter the world of adorable hedgehogs, the spiky friends of the night!" +
                " These charming creatures can be found in Europe, Asia, and Africa, often living in gardens and forests." +
                " Hedgehogs are known for their small size and distinctive appearance, covered in spines that act as a natural defense against predators." +
                " When they're feeling threatened, they curl up into a tight ball to protect themselves. Hedgehogs are omnivores," +
                " enjoying a diet that includes insects, worms, fruits, and even eggs. They're skilled foragers and use their keen sense of smell to locate food." +
                " Hedgehogs are most active at night, and their tiny faces and curious behaviors make them a delight to observe." +
                " With their unique features and gentle personalities, hedgehogs bring a touch of magic to the animal kingdom!",
                HardDiffDesc = "I live in Europe, Asia, and Africa, known for my spiky appearance and ability to curl up into a ball for protection." +
                " I forage at night, eating insects, worms, and fruits, and use my keen sense of smell to find food. With a tiny face and gentle nature," +
                " who am I that adds magic to the animal world?"
            },
            new QuestionModel()
            {
                Id = 36,
                Category = "Animals",
                Answer = "Badger",
                ImagePath = "badger.png",
                Description = "Step into the world of badgers, the underground architects of the animal kingdom!" +
                " These fascinating creatures are found in various parts of the world, including North America, Europe, and Asia." +
                " Badgers are known for their stout bodies, short legs, and distinct black and white stripes on their faces." +
                " They're expert diggers, using their strong claws to create intricate underground burrows called setts." +
                " Badgers are nocturnal, which means they're most active at night. They have keen senses, including excellent smell and hearing." +
                " Badgers are omnivores, enjoying a diet that includes insects, worms, fruits, and even small mammals." +
                " Their social behavior and intricate homes remind us of the complexity and diversity of wildlife.",
                HardDiffDesc = "I'm a clever digger from various parts of the world, including North America, Europe, and Asia." +
                " With stout bodies, short legs, and distinct black and white face stripes, I'm known for creating intricate underground homes." +
                " Just like the architects of nature, I'm active at night and enjoy a diverse diet. Can you guess who I am?"
            },
            new QuestionModel()
            {
                Id = 37,
                Category = "Animals",
                Answer = "Cheetah",
                ImagePath = "cheetah.png",
                Description = "Explore the speedy world of cheetahs, the fastest land animals on Earth!" +
                " These incredible cats can be found in various parts of Africa, from grasslands to savannas." +
                " Cheetahs are known for their sleek bodies, golden coats covered in black spots, and distinctive 'tear marks' on their faces that help reflect sunlight away." +
                " They're built for speed, with long legs and a lightweight frame. Cheetahs can reach speeds of up to 70 miles per hour in short bursts!" +
                " They're excellent hunters, relying on their speed to catch prey like antelopes. Despite their impressive skills, cheetahs are less aggressive than other big cats." +
                " They're often seen alone or in small family groups. With their remarkable abilities and striking appearance, cheetahs are a true marvel of the animal kingdom!",
                HardDiffDesc = "I'm a speedy wonder of the African plains!" +
                " With a sleek body, golden coat covered in black spots, and distinctive 'tear marks' on my face, I'm built for incredible speed." +
                " With long legs and lightweight frame, I can reach up to 70 miles per hour in short bursts! Can you guess who I am?"
            },
            new QuestionModel()
            {
                Id = 38,
                Answer = "Albatross",
                Category = "Animals",
                ImagePath = "albatross.png",
                Description = "Set your sights on the incredible albatross, the master of the open skies!" +
                " These remarkable birds are found in the oceans all around the world, spending most of their lives soaring above the waves." +
                " Albatrosses are known for their massive wingspans, which can be up to 11 feet long! They have long," +
                " slim bodies and white feathers that make them look elegant in flight. Albatrosses are excellent gliders," +
                " using the air currents to travel great distances without flapping their wings too much." +
                " They're skilled fishermen, using their hooked bills to catch squid and small fish from the water's surface." +
                " Albatrosses are known for their lifelong partnerships, with some species forming strong bonds that last for years." +
                " With their majestic presence and unique abilities, albatrosses remind us of the wonders of the ocean and the skies.",
                HardDiffDesc = "I'm a majestic flyer of the open seas, spanning oceans around the globe." +
                " With wings that stretch up to 11 feet, I glide with elegance and master the currents." +
                " Using my hooked bill, I'm a skilled fisherman catching prey from the water's surface. Who am I?"
            },
            new QuestionModel()
            {
                Id = 39,
                Answer = "Hummingbird",
                Category = "Animals",
                ImagePath = "hummingbird.png",
                Description = "Enter the enchanting world of hummingbirds, the tiny wonders of the sky!" +
                " These remarkable birds can be found in the Americas, from North to South, in various habitats such as forests, gardens, and even high mountains." +
                " Hummingbirds are known for their dazzling colors, swift movements, and their ability to hover in mid-air." +
                " With their iridescent feathers, they appear like tiny flying jewels." +
                " Hummingbirds have incredibly fast wingbeats, sometimes reaching up to 80 beats per second!" +
                " Their specialized long, slender bills are perfect for sipping nectar from flowers, which is their main source of food." +
                " They're also skilled acrobats, performing aerial displays and even flying upside down." +
                " With their vibrant beauty and astonishing feats, hummingbirds are a true spectacle of the natural world.",
                HardDiffDesc = "'m a vibrant flyer from the Americas, soaring through forests, gardens, and mountains." +
                " My dazzling colors and swift mid-air hover are like tiny jewels in the sky." +
                " With my specialized slender bill, I sip nectar from flowers, and my acrobatics and upside-down flights are truly remarkable. Who am I?"
            },
            new QuestionModel()
            {
                Id = 40,
                Answer = "Peacock",
                Category = "Animals",
                ImagePath = "peacock.png",
                Description = "Step into the world of peacocks," +
                " the regal birds with extravagant displays! These stunning creatures are native to South Asia, but you can also find them in zoos and parks around the world." +
                " Peacocks are known for their vibrant and iridescent feathers, which they fan out into a breathtaking display to attract mates." +
                " The male peacock, called a peafowl, is the one with the elaborate plumage, while the female is known as a peahen." +
                " Peafowls have a distinctive call that sounds like 'peacock' to some people." +
                " Peacocks are omnivores, enjoying a diet that includes plants, insects, and even small animals." +
                " With their magnificent appearance and captivating behavior, peacocks remind us of the beauty and diversity of the animal kingdom.",
                HardDiffDesc = "Step into a world of regal birds with vibrant feathers and captivating displays!" +
                " Found in South Asia and beyond, these stunning creatures showcase their iridescent plumage to attract mates." +
                " Who are these magnificent and colorful birds?"
            }




        };
public static List<QuestionModel> AnimalQuestions
{
    get { return _animalQuestions; }
        }

    }
}
