const handler = require('../handler');

const lesson_nodes = [
{
    node: 0,
    message: {
      text: 'Nice to have you back :relaxed:',
      metadata: '{"next":1,"type":"lesson"}',
    },
  },

  {
    node: 1,
    message: {
      text: 'After telling you about the Fight-or-Flight response last time ...'
      metadata: '{"next":2,"type":"lesson"}',
    },
  },
 {
    node: 2,
    message: {
      text: '... I\'m now going to teach you a technique to help when this reaction takes over'
      metadata: '{"next":3,"type":"lesson"}',
    },
  },
  {
    node: 3,
    message: {
      text: 'It\'s a technique that\'s especially useful when you feel really distressed :scream:',
      quick_replies: [
        {
          content_type: 'text',
          title: 'Sounds good',
          payload: '{"next":4,"type":"lesson"}',
        },
      ],
    },
  },
  {
    node: 4,
    message: {
      text: 'In moments of high anxiety ...',
      metadata: '{"next":5,"type":"lesson"}',
    },
  },
  {
    node: 5,
    message: {
      text: '... we\'re often caught up in negative thoughts, unpleasant memories or worries :thought_balloon:',
      metadata: '{"next":6,"type":"lesson"}',
    },
  },
  {
    node: 6,
    message: {
      text: 'In the midst of emotional chaos it can feel as if your thoughts and emotions are out of control :boom:',
      metadata: '{"next":7,"type":"lesson"}',
    },
  },  
    {
    node: 7,
    message: {
      text: 'In difficult moments like that, it\'s important to stay emotionally grounded',
      quick_replies: [
        {
          content_type: 'text',
          title: 'What do you mean?',
          payload: '{"next":8,"type":"lesson"}',
        },
      ],
    },
  },
{
    node: 8,
    message: {
      text: '*Grounding* is about getting back into the here-and-now',
      metadata: '{"next":9,"type":"lesson"}',
    },
  },
  {
    node: 9,
    message: {
      attachment: {
        type: 'image',
        payload: {
          url: 'https://s3.amazonaws.com/pocketcoach-media-storage/photos/Episode+3/Grounding.png',
        },
      },
      metadata: '{"next":10,"type":"lesson"}',
    },
  },
{
    node: 10,
    message: {
      text: 'It helps us shift our mental focus away from our thoughts and worries',
      metadata: '{"next":11,"type":"lesson"}',
    },
  },
  {
    node: 11,
    message: {
      text: 'The goal is to use our senses (see, hear, smell, taste, touch) ... ',
      metadata: '{"next":12,"type":"lesson"}',
    },
  },
  {
    node: 12,
    message: {
      text: '... to build our mind and body connection in the present moment',
      quick_replies: [
        {
          content_type: 'text',
          title: 'Like it',
          payload: '{"next":13,"type":"lesson"}',
        },
        {
          content_type: 'text',
          title: 'Sounds fluffy',
          payload: '{"next":15,"type":"lesson"}',
        },
      ],
    },
  },
 {
    node: 13,
    message: {
      text: 'Then let\'s try the technique right away',
      // metadata: '{"next":2,"lesson":1,"delay":20}',
      metadata: '{"next":14,"type":"lesson"}',
    },
  },
{
    node: 14,
    message: {
      text: 'How do you feel right now?',
      quick_replies: [
        {
          content_type: 'text',
          title: 'Calm :sunglasses:',
          payload: '{"next":20,"type":"lesson"}',
        },
        {
          content_type: 'text',
          title: 'A bit stressed :neutral_face:',
          payload: '{"next":27,"type":"lesson"}',
        },
        {
          content_type: 'text',
          title: 'Quite anxious :fearful:',
          payload: '{"next":32,"type":"lesson"}',
        },
      ],
    },
  },
 {
    node: 15,
    message: {
      text: 'Yea, I truly understand your skepticism :relaxed:',
      metadata: '{"next":16,"type":"lesson"}',
    },
  },
 {
    node: 16,
    message: {
      text: 'It feels weird for me to talk about a \'connection with the present moment\'',
      metadata: '{"next":17,"type":"lesson"}',
    },
  },
 {
    node: 17,
    message: {
      text: 'Or about getting into the \'here and now\'',
      metadata: '{"next":18,"type":"lesson"}',
    },
  },
   {
    node: 18,
    message: {
      text: 'But really, there are just no other words to describe what this technique is about',
      metadata: '{"next":19,"type":"lesson"}',
    },
  },
   {
    node: 19,
    message: {
      text: 'I\'ll guide you through the practice and then you can make up your mind',
      metadata: '{"next":14,"type":"lesson"}',
    },
  },
 {
    node: 20,
    message: {
      text: 'In that case, you probably won\'t feel the effect of this technique',
      metadata: '{"next":21,"type":"lesson"}',
    },
  },
 {
    node: 21,
    message: {
      text: 'But I\'ll still guide you through it, so you can use it in stressful moments',
      metadata: '{"next":22,"type":"lesson"}',
    },
  },
 {
    node: 22,
    message: {
      text: 'If you prefer, though, you can wait until you feel a bit anxious',
      metadata: '{"next":23,"type":"lesson"}',
    },
  },
 {
    node: 23,
    message: {
      text: 'What do you want?',
      quick_replies: [
        {
          content_type: 'text',
          title: 'I\'ll wait a bit',
          payload: '{"next":24,"type":"lesson"}',
        },
        {
          content_type: 'text',
          title: 'Show me now',
          payload: '{"next":26,"type":"lesson"}',
        },
      ],
    },
  },
{
    node: 24,
    message: {
      text: 'Ok!',
      metadata: '{"next":25,"type":"lesson"}',
    },
  },
{
    node: 25,
    message: {
      text: 'Just let me know whenever you want to continue',
      quick_replies: [
        {
          content_type: 'text',
          title: 'I\'m ready now',
          payload: '{"next":26,"type":"lesson"}',
        },
      ],
    },
  },
{
    node: 26,
    message: {
      text: 'Sweet :relaxed:',
      metadata: '{"next":34,"type":"lesson"}',
    },
  },
{
    node: 27,
    message: {
      text: 'Got it!',
      metadata: '{"next":28,"type":"lesson"}',
    },
  },
{
    node: 28,
    message: {
      text: 'The grounding technique is designed for moments of high anxiety ... ',
      metadata: '{"next":29,"type":"lesson"}',
    },
  },
{
    node: 29,
    message: {
      text: '... but it can also make sense to practice it now',
      metadata: '{"next":30,"type":"lesson"}',
    },
  },
  {
    node: 30,
    message: {
      text: 'You might not feel its effect as clearly now,  but you\'ll probably be glad to have learned it later :blush:',
      metadata: '{"next":31,"type":"lesson"}',
    },
  },
  {
    node: 31,
    message: {
      text: 'Ready?',
      quick_replies: [
        {
          content_type: 'text',
          title: 'Ready!',
          payload: '{"next":34,"type":"lesson"}',
        },
      ],
    },
  },
{
    node: 32,
    message: {
      text: 'The Grounding technique is designed for moments like this one',
      metadata: '{"next":33,"type":"lesson"}',
    },
  },
{
    node: 33,
    message: {
      text: 'Let me guide you through it right away',
      metadata: '{"next":34,"type":"lesson"}',
    },
  },
 {
    node: 34,
    message: {
      text: 'Start by looking around you',
      metadata: '{"next":35,"type":"lesson"}',
    },
  },
  {
    node: 35,
    message: {
      text: 'Name 5 things you can see',
      metadata: '{"next":36,"type":"lesson"}',
    },
  },
  {
    node: 36,
    message: {
      text: 'A person, a book or pencil, a piece of furniture, a parked car, ...',
      metadata: '{"next":37,"type":"lesson"}',
    },
  },
  {
    node: 37,
    message: {
      text: ':pencil2::closed_book::tennis::handbag::car:',
      metadata: '{"next":38,"type":"lesson"}',
    },
  },
{
    node: 38,
    message: {
      text: '(no need to say it out loud) :relaxed:',
      quick_replies: [
        {
          content_type: 'text',
          title: 'Next',
          payload: '{"next":39,"type":"lesson"}',
        },
      ],
    },
  },
 {
    node: 39,
    message: {
      text: 'Continue by naming 5 things you can hear',
      metadata: '{"next":40,"type":"lesson"}',
    },
  },
 {
    node: 40,
    message: {
      text: 'A bird singing, the sound of your laptop, the blood rushing through your ears or a song in the background ...',
      metadata: '{"next":41,"type":"lesson"}',
    },
  },
{
    node: 41,
    message: {
      text: ':bird::notes::bee::mega::alarm_clock:',
      quick_replies: [
        {
          content_type: 'text',
          title: 'Next',
          payload: '{"next":42,"type":"lesson"}',
        },
      ],
    },
  },
  {
    node: 42,
    message: {
      text: 'Now identify 5 things you can feel',
      metadata: '{"next":43,"type":"lesson"}',
    },
  },
 {
    node: 43,
    message: {
      text: 'Maybe your feet touching the floor, your back against your seat or your wristwatch touching your skin',
      metadata: '{"next":44,"type":"lesson"}',
    },
  },
{
    node: 44,
    message: {
      text: ':watch::mans_shoe::point_up_2::lips::jeans:',
      quick_replies: [
        {
          content_type: 'text',
          title: 'Next',
          payload: '{"next":45,"type":"lesson"}',
        },
      ],
    },
  },
   {
    node: 45,
    message: {
      text: 'Good! Here\'s how to continue:',
      metadata: '{"next":46,"type":"lesson"}',
    },
  },
   {
    node: 46,
    message: {
      text: 'Repeat the cycle of naming things that you see, hear, and feel :arrows_counterclockwise:',
      metadata: '{"next":47,"type":"lesson"}',
    },
  },
   {
    node: 47,
    message: {
      text: 'First five things each. You\'ve already done that',
      metadata: '{"next":48,"type":"lesson"}',
    },
  },
   {
    node: 48,
    message: {
      text: 'Next, find four of each. Then three. Then two',
      metadata: '{"next":49,"type":"lesson"}',
    },
  },
     {
    node: 49,
    message: {
      text: 'Finally, a round where you find one thing you see :eyes:, one you hear :ear:, and one you feel :point_up_2:',
      metadata: '{"next":50,"type":"lesson","delay":5}',
    },
  },
  {
    node: 50,
    message: {
      text: 'If you can, try to make it a different thing each time you go through',
      metadata: '{"next":51,"type":"lesson"}',
    },
  },
  {
    node: 51,
    message: {
      text: 'If you can\'t find any new sounds or sensations, you can also repeat the ones you already had',
      metadata: '{"next":52,"type":"lesson"}',
    },
  },
{
    node: 52,
    message: {
      text: 'Got it?',
      quick_replies: [
        {
          content_type: 'text',
          title: 'Understood :ok_hand:',
          payload: '{"next":57,"type":"lesson"}',
        },
        {
          content_type: 'text',
          title: 'Didn\'t fully get it',
          payload: '{"next":53,"type":"lesson"}',
        },
      ],
    },
  },
{
    node: 53,
    message: {
      text: 'No worries! Let\'s try a different way',
      metadata: '{"next":54,"type":"lesson"}',
    },
  },
{
    node: 54,
    message: {
      text: 'Here\'s a video that walks you through a similar version of the technique:',
      metadata: '{"next":55,"type":"lesson"}',
    },
  },
{
    node: 55,
    message: {
      attachment: {
        type: 'template',
        payload: {
          template_type: 'generic',
          elements: [
            {
              title: 'Grounding Technique Walk-through',
              image_url: 'https://img.youtube.com/vi/vccdOYUlzgM/0.jpg',
              default_action: {
                type: 'web_url',
                url: 'https://www.youtube.com/watch?v=vccdOYUlzgM',
              },
            },
          ],
        },
      },
      metadata: '{"next":56,"type":"lesson"}',
    }
  },
  {
    node: 56,
    message: {
      text: 'Take your time and move on whenever you\'re ready',
      quick_replies: [
        {
          content_type: 'text',
          title: 'Finished it',
          payload: '{"next":57,"type":"lesson"}',
        },
      ],
    },
  },
 {
    node: 57,
    message: {
      text: 'Great!',
      metadata: '{"next":58,"type":"lesson"}',
    },
  },
 {
    node: 58,
    message: {
      text: 'As I said, this technique is most helpful when you\'re having a bout of anxiety',
      metadata: '{"next":59,"type":"lesson"}',
    },
  },
  {
    node: 59,
    message: {
      attachment: {
        type: 'image',
        payload: {
          url: 'https://s3.amazonaws.com/pocketcoach-media-storage/photos/Episode+3/anxious3.gif',
        },
      },
      metadata: '{"next":60,"type":"lesson"}',
    },
  },
  {
    node: 60,
    message: {
      text: 'Makes sense?',
      quick_replies: [
        {
          content_type: 'text',
          title: 'Yes, skip ahead :fast_forward:',
          payload: '{"next":77,"type":"lesson"}',
        },
        {
          content_type: 'text',
          title: 'Why does it work?',
          payload: '{"next":61,"type":"lesson"}',
        },
      ],
    },
  },
{
    node: 61,
    message: {
      text: 'Because your brain can\'t be in two places at once!',
      metadata: '{"next":62,"type":"lesson"}',
    },
  },
  {
    node: 62,
    message: {
      text: 'It works by taking your focus off your anxious feelings and prompting you to focus on your surroundings instead',
      metadata: '{"next":63,"type":"lesson"}',
    },
  },
  {
    node: 63,
    message: {
      text: 'Your mind shifts from negative thoughts and uncomfortable feelings :thought_balloon: ... ',
      metadata: '{"next":64,"type":"lesson"}',
    },
  },
  {
    node: 64,
    message: {
      text: '... to the things, sounds and sensations around you :loud_sound::eyes::point_up:',
      quick_replies: [
        {
          content_type: 'text',
          title: 'Okay, I get it',
          payload: '{"next":77,"type":"lesson"}',
        },
        {
          content_type: 'text',
          title: 'Don\'t see the point',
          payload: '{"next":65,"type":"lesson"}',
        },
      ],
    },
  },
  {
    node: 65,
    message: {
      text: 'I see',
      metadata: '{"next":66,"type":"lesson"}',
    },
  },
  {
    node: 66,
    message: {
      text: 'Perhaps stressful bouts of anxiety are not part of your experience with anxiety?',
      quick_replies: [
        {
          content_type: 'text',
          title: 'I do panic at times',
          payload: '{"next":70,"type":"lesson"}',
        },
        {
          content_type: 'text',
          title: 'I don\'t panic',
          payload: '{"next":67,"type":"lesson"}',
        },
      ],
    },
  },
{
    node: 67,
    message: {
      text: 'Got it :white_check_mark:',
      metadata: '{"next":68,"type":"lesson"}',
    },
  },
  {
    node: 68,
    message: {
      text: 'This grounding technique can still be helpful for you if you get angry, frustrated or depressed',
      metadata: '{"next":69,"type":"lesson"}',
    },
  },
 {
    node: 69,
    message: {
      text: 'Whenever you\'re in an intense emotional state, it helps bring you back into the present and reorient you to the here and now',
      quick_replies: [
        {
          content_type: 'text',
          title: 'Okay, understood',
          payload: '{"next":74,"type":"lesson"}',
        },
      ],
    },
  },
    },
{
    node: 70,
    message: {
      text: 'Ok.  What grounding does is bring you back into the here-and-now when you\'re in an intense emotional state',
      metadata: '{"next":71,"type":"lesson"}',
    },
  },
{
    node: 71,
    message: {
      text: 'Grounding distracts you from the anxious feelings and negative thoughts :thought_balloon:',
      metadata: '{"next":72,"type":"lesson"}',
    },
  },
  {
    node: 72,
    message: {
      text: 'Essentially, it\'s a distraction trick that – with a bit of effort – takes your mind away from feeling uneasy ...',
      metadata: '{"next":73,"type":"lesson"}',
    },
  },
 {
    node: 73,
    message: {
      text: '... and brings your focus back to reality',
      quick_replies: [
        {
          content_type: 'text',
          title: 'Understood',
          payload: '{"next":74,"type":"lesson"}',
        },
      ],
    },
  },
  {
    node: 74,
    message: {
      text: 'Just give it a try as you see fit',
      metadata: '{"next":75,"type":"lesson"}',
    },
  },
  {
    node: 75,
    message: {
      text: 'If this exercise doesn\'t do a whole lot for you after a few tries, go ahead and forget it',
      metadata: '{"next":76,"type":"lesson"}',
    },
  },
 {
    node: 76,
    message: {
      text: 'We have plenty of other lessons to come!',
      quick_replies: [
        {
          content_type: 'text',
          title: 'Okay I see',
          payload: '{"next":77,"type":"lesson"}',
        },
      ],
    },
  },
  {
    node: 77,
    message: {
      text: ':blush:',
      metadata: '{"next":78,"type":"lesson"}',
    },
  },
  {
    node: 78,
    message: {
      text: 'You can combine the grounding technique with the 4-7-8 breathing',
      metadata: '{"next":79,"type":"lesson"}',
    },
  },
 {
    node: 79,
    message: {
      text: 'Together they can be even more effective',
      quick_replies: [
        {
          content_type: 'text',
          title: 'Nice',
          payload: '{"next":80,"type":"lesson"}',
        },
      ],
    },
  },
   {
    node: 80,
    message: {
      text: 'Alright, you\'re all set for now',
      metadata: '{"next":81,"type":"lesson"}',
    },
  },
   {
    node: 81,
    message: {
      text: 'We\'ll speak again tomorrow!',
      metadata: '{"next":82,"type":"lesson"}',
    },
  },
   {
    node: 82,
    message: {
      text: 'And if you become anxious in the meantime ...',
      metadata: '{"next":83,"type":"lesson"}',
    },
  },
   {
    node: 83,
    message: {
      text: '... use the 4-7-8 breathing or the grounding technique to calm you down :relieved:',
      metadata: '{"next":84,"type":"lesson"}',
    },
  },
{
    node: 85,
    message: {
      attachment: {
        type: 'image',
        payload: {
          url: 'https://s3.amazonaws.com/pocketcoach-media-storage/photos/Episode+3/bye15.gif',
        },
      },
      metadata: '{"next":112,"type":"end_lesson"}',
    },
  },
