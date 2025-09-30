function ListNode(val) {
  this.val = val;
  this.next = null;
  this.flag = false;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  while (head) {
    if (head.flag) {
      return true;
    }
    head.flag = true;
    head = head.next;
  }
  return false;
};

const s1 = new ListNode(3);

s1.next = new ListNode(2);
s1.next.next = new ListNode(0);
s1.next.next.next = new ListNode(-4);

console.log(hasCycle(s1));
// [3] 0x1000

// {0x1000, }

// [2], 0x500
// {0x1000, 0x500}

// [0], 0x100
// {0x1000, 0x500, 0x100}

// [-4], 0x5000
// {0x1000, 0x500, 0x100, 0x5000}

// [2] 0x500

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  const st = new Set();

  while (head) {
    if (st.has(head)) {
      return true;
    }
    st.add(head);
    head = head.next;
  }
  return false;
};
